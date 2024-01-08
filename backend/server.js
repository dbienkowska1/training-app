import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import trainingsRoute from "./routes/trainings.js";
import connectMongoDb from "./config/mongodb.js";

const app = express();
const port = process.env.PORT || 8080;

dotenv.config();
connectMongoDb();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("ok");
});

app.use("/trainings", trainingsRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
