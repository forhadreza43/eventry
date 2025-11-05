"use server";
import {
  createUser,
  findUser,
  updateInterest,
} from "@/db/queries";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
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
  // Parse and validate credentials
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
        : dbUser._id?.toString?.() ?? null,
    name: dbUser.name ?? null,
    email: dbUser.email ?? null,
    phone: dbUser.phone ?? null,
    bio: dbUser.bio ?? null,
  };

  return safeUser;
}

const updateEventInterest = async (userId: string, eventId: string) => {
  try {
    // console.log(userId, eventId);
    await updateInterest(userId, eventId);
  } catch (error) {
    console.error("Error updating event interest:", error);
  }
  revalidatePath("/");
};

export { registerUser, performLogin, updateEventInterest };
