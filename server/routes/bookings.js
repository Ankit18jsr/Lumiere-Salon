const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// Post a new booking
router.post('/', async (req, res) => {
  try {
    const { service, date, time, firstName, lastName, email, phone, notes } = req.body;
    
    // In a real app we'd trigger a nodemailer email to the owner here
    
    const newBooking = new Booking({
      service, date, time, firstName, lastName, email, phone, notes
    });
    
    await newBooking.save();
    
    res.status(201).json({ message: 'Booking request received successfully', booking: newBooking });
  } catch (error) {
    console.error('Error saving booking:', error);
    res.status(500).json({ message: 'Server error while processing booking' });
  }
});

// Admin: Get all bookings
router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Server error fetching bookings' });
  }
});

module.exports = router;
