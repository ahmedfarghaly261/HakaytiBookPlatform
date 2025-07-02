const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User');

const authRoutes = require('./routes/auth');
const booksRoutes = require('./routes/books');
const specialBooksRoutes = require('./routes/specialBooks');
const commentsRoutes = require('./routes/comments');
const favoritesRoutes = require('./routes/favorites');

const path = require('path');


const app = express();
app.use(cors());
app.use(express.json());

// Serve static files from uploads "Books images"
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routs
app.use('/api/auth', authRoutes);
app.use('/api/books', booksRoutes);
app.use('/api/specialbooks', specialBooksRoutes);
app.use('/api/comments', commentsRoutes);
app.use('/api/favorites', favoritesRoutes);

// default route for welcome message on port 3001
app.get('/', (req, res) => {
  res.send('Welcome to backend API!(APIs is running!!)');
});

mongoose.connect('mongodb+srv://ahmedfarghaly201055:7Mt4a2DG1IR5a4Di@cluster0.ut7qger.mongodb.net/rawy?retryWrites=true&w=majority')
  .then(() => {
    console.log('✅ Connected to DB');
    app.listen(3001, () => {
      console.log('🚀 Server running on port 3001');
    });
  })
  .catch(err => console.log('❌ Error:', err));
