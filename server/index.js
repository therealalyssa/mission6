const express = require("express");
const cors = require("cors");
const db = require("./db");
const app = express();
const apiPort = 3009;

app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(express.json());

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get("/", (req, res) => {
  res.send("What's my name?!");
});

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
