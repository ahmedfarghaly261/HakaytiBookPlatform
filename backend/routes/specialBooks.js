const express = require('express');
const router = express.Router();
const SpecialBook = require('../models/specialBooks');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Ensure uploads directory exists
const uploadDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage });

// Set newReleasesId for a special book (and clear forUId and trainingId)
router.patch('/:id/newrelease', async (req, res) => {
  try {
    const { newReleasesId } = req.body;
    console.log('PATCH /:id/newrelease called for', req.params.id, 'with newReleasesId:', newReleasesId);
    const book = await SpecialBook.findByIdAndUpdate(
      req.params.id,
      { newReleasesId: String(newReleasesId), forUId: null, trainingId: null },
      { new: true }
    );
    if (!book) return res.status(404).json({ error: 'Book not found' });
    res.json(book);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Add a new special book (with image upload)
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const { title, author, description, Category } = req.body;
    const image = req.file ? req.file.filename : '';
    const specialBook = new SpecialBook({
      title,
      author,
      image,
      description,
      Category
    });
    await specialBook.save();
    res.status(201).json(specialBook);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all special books
router.get('/', async (req, res) => {
  try {
    const books = await SpecialBook.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

// Get a special book by ID
router.get('/:id', async (req, res) => {
  try {
    const book = await SpecialBook.findById(req.params.id);
    if (!book) return res.status(404).json({ error: 'Book not found' });
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a special book by ID
router.delete('/:id', async (req, res) => {
  try {
    const book = await SpecialBook.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }
    // Optionally, delete the image file
    if (book.image) {
      const imagePath = path.join(__dirname, '../uploads', book.image);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }
    res.json({ message: 'Special book deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Set forUId for a special book

// Set forUId for a special book (and clear trainingId)
router.patch('/:id/foru', async (req, res) => {
  try {
    const { forUId } = req.body;
    const book = await SpecialBook.findByIdAndUpdate(
      req.params.id,
      { forUId, trainingId: null },
      { new: true }
    );
    if (!book) return res.status(404).json({ error: 'Book not found' });
    res.json(book);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Set trainingId for a special book

// Set trainingId for a special book (and clear forUId)
router.patch('/:id/training', async (req, res) => {
  try {
    const { trainingId } = req.body;
    const book = await SpecialBook.findByIdAndUpdate(
      req.params.id,
      { trainingId, forUId: null },
      { new: true }
    );
    if (!book) return res.status(404).json({ error: 'Book not found' });
    res.json(book);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
