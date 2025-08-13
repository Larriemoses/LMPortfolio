import { Schema, model, Document, Types } from "mongoose";

export interface IBlog extends Document {
  title: string;
  content: string;
  author: string;
  authorId: Types.ObjectId;
  tags?: string[];
  category: string;
  status: "pending" | "approved" | "rejected";
  createdAt: Date;
  updatedAt: Date;
}

const blogSchema = new Schema<IBlog>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    authorId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    tags: [{ type: String }],
    category: { type: String, required: true },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export const Blog = model<IBlog>("Blog", blogSchema);
