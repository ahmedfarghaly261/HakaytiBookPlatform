const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true
  },
  bookId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  bookModel: {
    type: String,
    required: true,
    enum: ['Book', 'SpecialBook']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Favorite', favoriteSchema);
