import express from "express";
import Training from "../models/training.js";
import {
  isTrainingValid,
  isStartAndEndDateValid,
  isStartAndEndTimeValid,
} from "../controllers/trainings.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const trainings = await Training.find({});
    res.status(200).send(trainings);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/my-trainings/:username", async (req, res) => {
  const { username } = req.params;

  if (!username) throw new Error("Invalid username");

  try {
    const trainings = await Training.find({ trainer: username });
    res.status(200).send(trainings);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  if (!id || id === "") throw new Error("Invalid ID");

  try {
    const training = await Training.findById(id);
    res.status(200).send(training);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/", async (req, res) => {
  const training = req.body;

  try {
    isTrainingValid(training);
    isStartAndEndDateValid(training.startDate, training.endDate);
    isStartAndEndTimeValid(training.startTime, training.endTime);
    await Training.create(training);
    res.status(201).send(training);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const training = req.body;

  if (!id || id === "") throw new Error("Invalid ID");

  try {
    isTrainingValid(training);
    isStartAndEndDateValid(training.startDate, training.endDate);
    isStartAndEndTimeValid(training.startTime, training.endTime);
    const updatedTraining = await Training.findByIdAndUpdate(id, training);
    res.status(200).send(updatedTraining);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  if (!id || id === "") throw new Error("Invalid ID");

  try {
    const training = await Training.findByIdAndDelete(id);
    res.status(200).send(training);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

export default router;
