const express = require("express");
const http = require("http");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.get("/", (req, res) => {
  console.log("hellohello");
  res.json({ animal: "racoon" });
});

console.log("hello");

app.listen(process.env.PORT || 5000);
