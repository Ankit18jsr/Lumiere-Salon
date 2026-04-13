require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const bookingRoutes = require('./routes/bookings');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());

// Routes
app.use('/api/bookings', bookingRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Lumière Salon API is running.' });
});

// Database Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/lumiere_salon')
  .then(() => {
    console.log('✅ Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`✅ Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err);
  });
