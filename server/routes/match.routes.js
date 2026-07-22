const express = require('express');
const router = express.Router();
const Match = require('../models/Match');

// Get all matches
router.get('/', async (req, res) => {
  try {
    const matches = await Match.find();
    res.json(matches);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching matches', error: error.message });
  }
});

// Get match by id
router.get('/:id', async (req, res) => {
  try {
    const match = await Match.findById(req.params.id);
    if (!match) return res.status(404).json({ message: 'Match not found' });
    res.json(match);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching match', error: error.message });
  }
});

// Create a new match
router.post('/', async (req, res) => {
  try {
    const { userId, targetId, status } = req.body;
    if (!userId || !targetId || !status) {
      return res.status(400).json({ message: 'Missing required fields: userId, targetId, or status' });
    }
    const newMatch = await Match.create({ userId, targetId, status });
    res.status(201).json(newMatch);
  } catch (error) {
    res.status(500).json({ message: 'Error creating match', error: error.message });
  }
});

// Update a match
router.put('/:id', async (req, res) => {
  try {
    const match = await Match.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!match) return res.status(404).json({ message: 'Match not found' });
    res.json(match);
  } catch (error) {
    res.status(400).json({ message: 'Error updating match', error: error.message });
  }
});

// Delete a match
router.delete('/:id', async (req, res) => {
  try {
    const match = await Match.findByIdAndDelete(req.params.id);
    if (!match) return res.status(404).json({ message: 'Match not found' });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Error deleting match', error: error.message });
  }
});

module.exports = router;