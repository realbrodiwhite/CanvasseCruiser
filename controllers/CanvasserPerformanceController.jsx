// controllers/CanvasserPerformanceController.js

const CanvasserPerformance = require('../models/CanvasserPerformance'); // Assuming you have a CanvasserPerformance model

// Get canvasser performance
exports.getCanvasserPerformance = async (req, res) => {
  try {
    const performance = await CanvasserPerformance.find();
    res.json(performance);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
// controllers/CanvasserPerformanceController.js

const CanvasserPerformance = require('../models/CanvasserPerformance'); // Assuming you have a CanvasserPerformance model

// Get canvasser performance
exports.getCanvasserPerformance = async (req, res) => {
  try {
    const performance = await CanvasserPerformance.find();
    res.json(performance);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
