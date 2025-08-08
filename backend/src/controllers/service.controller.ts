import { Request } from "../types/expressRequest";
import { Response } from "express";
import { Service } from "../models/Service";

// Create a service
export const createService = async (req: Request, res: Response) => {
  const { title, description, price, features } = req.body;

  const service = await Service.create({ title, description, price, features });
  res.status(201).json(service);
};

// Get all services
export const getAllServices = async (_req: Request, res: Response) => {
  const services = await Service.find().sort({ createdAt: -1 });
  res.json(services);
};

// Update a service
export const updateService = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updated = await Service.findByIdAndUpdate(id, req.body, { new: true });

  if (!updated) return res.status(404).json({ message: "Service not found" });
  res.json(updated);
};

// Delete a service
export const deleteService = async (req: Request, res: Response) => {
  const { id } = req.params;
  const removed = await Service.findByIdAndDelete(id);

  if (!removed) return res.status(404).json({ message: "Service not found" });
  res.json({ message: "Service deleted" });
};
