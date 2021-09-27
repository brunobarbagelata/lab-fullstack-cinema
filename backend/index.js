const express = require("express");
const http = require("http");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

mongoose
  .connect(`mongodb://localhost:27017/moviesDB`)
  .then((self) =>
    console.log(`Connected to the database: "${self.connection.name}"`)
  );

app.get("/home", (req, res) => {
  console.log("hellohello");
  res.json({ animal: "racoon" });
});

console.log("hello");

app.use(cors()); //for cors
app.use(express.json()); //for req.body

app.listen(process.env.PORT || 5000);
