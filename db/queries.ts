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

const updateInterest = async (userId: string, eventId: string) => {
  try {
    const event = await eventModel.findById(eventId);
    if (!event) {
      throw new Error("Event not found");
    }

    const isInterested = event.interested_ids.some(
      (id:{id:string}) => id.toString() === userId.toString()
    );

    // Use findOneAndUpdate to atomically update the document
    const updatedEvent = await eventModel.findOneAndUpdate(
      { _id: eventId },
      isInterested
        ? { $pull: { interested_ids: userId } } // Remove user if interested
        : { $addToSet: { interested_ids: userId } }, // Add user if not interested
      {
        new: true, // Return updated document
        runValidators: true, // Run schema validators
      }
    );

    if (!updatedEvent) {
      throw new Error("Event not found during update");
    }

    return updatedEvent;
  } catch (error) {
    console.error("Error updating interest:", error);
    throw error;
  }
};

export { getAllEvents, getEventById, createUser, findUser, updateInterest };
