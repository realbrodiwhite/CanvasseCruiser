// controllers/RouteController.js

const Route = require('../models/Route'); // Assuming you have a Route model

// Get all routes
exports.getRoutes = async (req, res) => {
  try {
    const routes = await Route.find();
    res.json(routes);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
