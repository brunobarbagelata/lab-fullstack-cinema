const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: String,
  director: String,
  stars: {
    type: String,
    enum: ["Storm Reid", "Oprah Winfrey", "Reese Witherspoon"],
  },
  image: String,
  description: String,
  showtimes: [String],
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
