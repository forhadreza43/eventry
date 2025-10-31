import { User } from "@/definition/definition";
import { eventModel, userModel } from "@/models/event-models";

const getAllEvents = async () => {
  try {
    const allEvents = await eventModel.find({});
    return allEvents;
  } catch (error) {
    console.error("Error fetching all events:", error);
  }
  return [];
};

const getEventById = async (eventId: string) => {
  try {
    const event = await eventModel.findById(eventId);
    return event;
  } catch (error) {
    console.error("Error fetching event by ID:", error);
  }
  return null;
};

const createUser = async (user: User) => {
  try {
    const newUser = await userModel.create(user);
    return newUser;
  } catch (error) {
    console.error("Error creating user:", error);
  }
  return null;
};

const findUser = async (credential: { email: string; password: string }) => {
  try {
    const user = await userModel.findOne(credential).lean();
    return user;
  } catch (error) {
    console.error("Error finding user:", error);
  }
  return null;
};

const updateEventInterest = async (userId: string, eventId: string) => {
  const event = await getEventById(eventId);
  if (!event) {
    throw new Error("Event not found");
  }

  // Update the interested users list
  event.interested_ids.push(userId);
  await eventModel.findByIdAndUpdate(eventId, event);
};

export { getAllEvents, getEventById, createUser, findUser, updateEventInterest };
