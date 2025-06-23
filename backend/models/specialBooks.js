const mongoose = require("mongoose");

const specialBooks = new mongoose.Schema({
  newReleasesId: {
    type: String,
    default: null,
  },
  forUId: {
    type: String,
    default: null,
  },
  trainingId: {
    type: String,
    default: null,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  Category: {
    type: String,
    enum: [
      'Fiction',
      'Non-fiction',
      'Science',
      'History',
      'Fantasy',
      'Biography',
      'Romance',
      'Other'
    ],
    required: true,
  },
  publishedDate: {
    type: Date,
    default: Date.now,
  },
});

const SpecialBook = mongoose.model("SpecialBook", specialBooks);
module.exports = SpecialBook;
