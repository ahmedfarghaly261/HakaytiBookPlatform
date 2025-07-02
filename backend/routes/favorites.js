const express = require('express');
const router = express.Router();
const Favorite = require('../models/favorite');
const mongoose = require('mongoose');

// Get all favorites for a user
router.get('/:user', async (req, res) => {
  try {
    const { user } = req.params;
    let favorites = await Favorite.find({ user });
    // Filter out any null/undefined, empty objects, or missing bookId/bookModel
    favorites = Array.isArray(favorites)
      ? favorites.filter(fav => fav && Object.keys(fav.toObject ? fav.toObject() : fav).length > 0 && fav.bookId && fav.bookModel)
      : [];
    res.json(favorites);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch favorites' });
  }
});

// Add a book to favorites
router.post('/', async (req, res) => {
  try {
    const { user, bookId, bookModel } = req.body;
    if (!user || !bookId || !bookModel) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    // Convert bookId to ObjectId if needed
    const bookObjectId = mongoose.Types.ObjectId.isValid(bookId) ? new mongoose.Types.ObjectId(bookId) : bookId;
    // Prevent duplicate
    const exists = await Favorite.findOne({ user, bookId: bookObjectId, bookModel });
    if (exists) return res.status(409).json({ error: 'Already in favorites' });
    const fav = new Favorite({ user, bookId: bookObjectId, bookModel });
    await fav.save();
    res.status(201).json(fav);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add favorite' });
  }
});

// Remove a book from favorites
router.delete('/', async (req, res) => {
  try {
    const { user, bookId, bookModel } = req.body;
    // Convert bookId to ObjectId if needed
    const bookObjectId = mongoose.Types.ObjectId.isValid(bookId) ? new mongoose.Types.ObjectId(bookId) : bookId;
    await Favorite.deleteOne({ user, bookId: bookObjectId, bookModel });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to remove favorite' });
  }
});

module.exports = router;
