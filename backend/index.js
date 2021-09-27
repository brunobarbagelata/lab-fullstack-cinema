const express = require("express");
const http = require("http");
const mongoose = require("mongoose");
const Movie = require("./models/Movie");
const cors = require("cors");

mongoose
  .connect(`mongodb://localhost:27017/movieDB`)
  .then((self) =>
    console.log(`Connected to the database: "${self.connection.name}"`)
  );

const app = express();
app.use(cors()); //for cors
app.use(express.json()); //for req.body

console.log("its working");

app.get("/", (req, res) => {
  res.json({ name: "hello" });
});

app.listen(process.env.PORT || 5000);
