const express = require('express');
const router = express.Router();
const Comment = require('../models/comment');

// Get all comments for a book
router.get('/:bookModel/:bookId', async (req, res) => {
  try {
    const { bookModel, bookId } = req.params;
    const comments = await Comment.find({ bookId, bookModel }).sort({ createdAt: -1 });
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch comments' });
  }
});

// Add a comment to a book
router.post('/', async (req, res) => {
  try {
    const { bookId, bookModel, user, comment, rating } = req.body;
    if (!bookId || !bookModel || !user || !comment || !rating) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    const newComment = new Comment({ bookId, bookModel, user, comment, rating });
    await newComment.save();
    res.status(201).json(newComment);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add comment' });
  }
});

module.exports = router;
