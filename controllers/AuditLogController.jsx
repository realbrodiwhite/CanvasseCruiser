// controllers/AuditLogController.js

const AuditLog = require('../models/AuditLog'); // Assuming you have an AuditLog model

// Get all audit logs
exports.getAuditLogs = async (req, res) => {
  try {
    const logs = await AuditLog.find();
    res.json(logs);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
