// src/models/Blog.ts

import { Schema, model, Document, Types } from "mongoose";

export interface IComment {
  user: Types.ObjectId;
  text: string;
  createdAt: Date;
}

export interface IBlog extends Document {
  title: string;
  content: string;
  slug: string; // ✅ New: Add slug to the interface
  author: string;
  authorId: Types.ObjectId;
  tags?: string[];
  category: string;
  image?: string;
  status: "pending" | "approved" | "rejected";
  views: number;
  likes: Types.ObjectId[];
  comments: IComment[];
  createdAt: Date;
  updatedAt: Date;
}

const commentSchema = new Schema<IComment>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    text: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  },
  { _id: false }
);

const blogSchema = new Schema<IBlog>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    slug: { type: String, required: true, unique: true }, // ✅ New: Add slug field to the schema
    author: { type: String, required: true },
    authorId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    tags: [{ type: String }],
    category: { type: String, required: true },
    image: { type: String },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
    views: { type: Number, default: 0 },
    likes: [{ type: Schema.Types.ObjectId, ref: "User" }],
    comments: [commentSchema],
  },
  { timestamps: true }
);

export const Blog = model<IBlog>("Blog", blogSchema);
