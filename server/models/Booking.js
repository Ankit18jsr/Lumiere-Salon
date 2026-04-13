const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  service: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  notes: { type: String, default: '' },
  status: { type: String, enum: ['Pending', 'Confirmed', 'Cancelled'], default: 'Pending' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Booking', bookingSchema);
