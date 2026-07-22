const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],
    trim: true,
    unique: true
  },
  bio: {
    type: String,
    trim: true,
    default: ''
  },
  age: {
    type: Number,
    required: [true, 'Age is required'],
    min: [18, 'Must be at least 18'],
    max: [120, 'Age out of range']
  },
  interests: {
    type: String,
    trim: true,
    default: ''
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
}, { 
  timestamps: true 
});

module.exports = mongoose.model('User', userSchema);