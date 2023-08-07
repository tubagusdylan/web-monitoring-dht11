import express from "express";
import { data } from "./data.js";
import cors from "cors";

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());

app.post("/", (req, res) => {
  const { temp, hum } = req.body;
  data.temp = temp;
  data.hum = hum;
  res.status(200).send("Data masuk");
});

app.get("/", (req, res) => {
  res.status(200);
  res.set("Content-Type", "application/json");
  res.json({
    data: {
      temp: data.temp,
      hum: data.hum,
    },
  });
});

app.listen(port, () => {
  console.log(`Server is running... http://localhost:${port}`);
});
