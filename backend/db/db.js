const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ahmedfarghaly201055:7Mt4a2DG1IR5a4Di@cluster0.ut7qger.mongodb.net/rawy?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB connected"))
.catch(err => console.log("❌ MongoDB connection error:", err));