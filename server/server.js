import express from "express";
import cors from "cors";
import { exercises } from "./apiData/exercises.js";
import { bodyPartsList } from "./apiData/bodyPartList.js";

const app = express();
const port = process.env.PORT || 4800;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/exercises", (req, res) => {
  res.send(exercises);
});

app.get("/exercises/bodyPartList", (req, res) => {
  res.send(bodyPartsList);
});

app.listen(port, () => console.log("Server listening"));
