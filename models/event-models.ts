import mongoose, { Schema, Document } from "mongoose";

// Interface for the User/Event model
export interface IUser extends Document {
  _id: string;
  name: string;
  email: string;
  password: string;
  phone: number;
  bio: string;
}

// Interface for the Event model
export interface IEvent extends Document {
  _id: string;
  name: string;
  details: string;
  location: string;
  imageUrl: string;
  interested_ids: string[];
  going_ids: string[];
  swags?: string[];
  __v?: number;
}

// Mongoose schema definition

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    bio: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export const userModel =
  mongoose.models.users ?? mongoose.model<IUser>("users", userSchema);

// Mongoose schema definition for Event
const eventSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    interested_ids: {
      type: Array<string>,
      default: [],
      required: false,
    },
    going_ids: {
      type: Array<string>,
      default: [],
      required: false,
    },
    swags: {
      type: [String],
      default: [],
      required: false,
    },
    __v: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export const eventModel =
  mongoose.models.events ?? mongoose.model<IEvent>("events", eventSchema);
