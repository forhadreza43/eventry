import { eventModel } from "@/models/event-models";

export const getAllEvents = async () => {
  try {
    const allEvents = await eventModel.find({});
    return allEvents;
  } catch (error) {
    console.error("Error fetching all events:", error);
  }
  return [];
};

export const getEventById = async (eventId: string) => {
  try {
    const event = await eventModel.findById(eventId);
    return event;
  } catch (error) {
    console.error("Error fetching event by ID:", error);
  }
  return null;
};
