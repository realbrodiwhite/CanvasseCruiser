// controllers/SystemMetricsController.js

const SystemMetrics = require('../models/SystemMetrics'); // Assuming you have a SystemMetrics model

// Get system metrics
exports.getSystemMetrics = async (req, res) => {
  try {
    const metrics = await SystemMetrics.find();
    res.json(metrics);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
