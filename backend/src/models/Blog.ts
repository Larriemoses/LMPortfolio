import { Schema, model, Document } from "mongoose";

export interface IBlog extends Document {
  title: string;
  content: string;
  author: string;
  tags?: string[];
  createdAt: Date;
  updatedAt: Date;
}

const blogSchema = new Schema<IBlog>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    tags: [{ type: String }],
  },
  { timestamps: true }
);

export const Blog = model<IBlog>("Blog", blogSchema);
