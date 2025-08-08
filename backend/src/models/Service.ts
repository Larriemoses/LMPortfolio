import { Schema, model, Document } from "mongoose";

export interface IService extends Document {
  title: string;
  description: string;
  price?: number;
  features?: string[];
  isActive: boolean;
}

const serviceSchema = new Schema<IService>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number },
    features: [{ type: String }],
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export const Service = model<IService>("Service", serviceSchema);
