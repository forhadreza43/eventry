"use server";
import { EmailTemplate } from "@/components/Email-template";
import {
  createUser,
  findUser,
  getEventById,
  updateGoing,
  updateInterest,
} from "@/db/queries";
import { AuthUser } from "@/definition/definition";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Resend } from "resend";
import { z } from "zod";

const userSchema = z.object({
  email: z.string().email(),
  name: z.string().min(2).max(100),
  password: z.string().min(8).max(100),
  phone: z.string().min(10).max(15),
  bio: z.string().max(500),
});

async function registerUser(formData: FormData) {
  const user = Object.fromEntries(formData.entries());
  const result = userSchema.safeParse(user);
  if (!result.success) {
    throw new Error("Invalid user data");
  }
  await createUser(result.data);
  redirect("/login");
}

async function performLogin(formData: FormData) {
  const credentials = Object.fromEntries(formData.entries());
  const result = z
    .object({
      email: z.string().email(),
      password: z.string().min(8).max(100),
    })
    .safeParse(credentials);

  if (!result.success) {
    throw new Error("Invalid login credentials");
  }

  const user = await findUser(result.data);
  if (!user) {
    throw new Error("Invalid email or password");
  }

  type DbUser = {
    _id?: { toString: () => string } | string;
    name?: string;
    email?: string;
    phone?: string;
    bio?: string;
  };

  const dbUser = user as DbUser;
  const safeUser = {
    id:
      typeof dbUser._id === "string"
        ? dbUser._id
        : (dbUser._id?.toString?.() ?? null),
    name: dbUser.name ?? null,
    email: dbUser.email ?? null,
    phone: dbUser.phone ?? null,
    bio: dbUser.bio ?? null,
  };

  return safeUser;
}

const updateEventInterest = async (userId: string, eventId: string) => {
  try {
    await updateInterest(userId, eventId);
  } catch (error) {
    console.error("Error updating event interest:", error);
  }
  revalidatePath("/");
};

const addToGoing = async (user: AuthUser, eventId: string) => {
  try {
    await updateGoing(user.id!, eventId);
    await sendEmail(user, eventId);
  } catch (error) {
    console.error("Error adding to going list:", error);
  }
  revalidatePath("/");
  redirect("/");
};

const sendEmail = async (user: AuthUser, eventId: string) => {
  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not configured");
    return;
  }

  try {
    const event = await getEventById(eventId);
    if (!event) {
      console.error("Event not found for email:", eventId);
      return;
    }

    if (!user.email) {
      console.error("User email is missing");
      return;
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const message = `Dear ${user.name || "Guest"}, you have been successfully registered for the event, ${event.name}. Please carry this email and your official id to the venue. We are excited to have you here.`;

    console.log("Sending email to:", user.email);
    const { data, error } = await resend.emails.send({
      from: "Eventry <onboarding@resend.dev>", // Use verified domain or default testing address
      to: [user.email],
      subject: `Registration Confirmation for ${event.name}`,
      react: EmailTemplate({ message }),
    });

    if (error) {
      console.error("Resend API error:", error);
      return;
    }

    console.log("Email sent successfully:", data);
    return data;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error; // Rethrow to handle in addToGoing
  }
};

export {
  registerUser,
  performLogin,
  updateEventInterest,
  addToGoing,
  sendEmail,
};
