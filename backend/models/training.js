import mongoose, { Schema } from "mongoose";

const TrainingSchema = new Schema({
  title: { type: String, required: true },
  startDate: { type: String, required: true },
  endDate: { type: String, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  language: { type: String, required: true },
  location: { type: String, required: true },
  level: { type: String, required: true },
  trainer: { type: String, required: true },
  users: { type: Array },
});

const Training =
  mongoose.models.Training || mongoose.model("Training", TrainingSchema);

export default Training;
