const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: [true, 'User ID is required'],
      trim: true,
      index: true
    },
    targetId: {
      type: String,
      required: [true, 'Target user ID is required'],
      trim: true,
      index: true
    },
    status: {
      type: String,
      enum: ['pending', 'accepted', 'rejected', 'blocked'],
      default: 'pending',
      trim: true
    }
  },
  {
    timestamps: true
  }
);

// Create compound index to ensure one match record per pair per direction
matchSchema.index({ userId: 1, targetId: 1 }, { unique: true });

module.exports = mongoose.model('Match', matchSchema);