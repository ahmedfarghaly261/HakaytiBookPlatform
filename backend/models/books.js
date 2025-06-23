const mongoose = require("mongoose");

const books = new mongoose.Schema({
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

const Book = mongoose.model("Book", books);
module.exports = Book;
