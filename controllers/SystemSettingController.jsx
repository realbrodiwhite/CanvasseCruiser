// controllers/SystemSettingController.js

const SystemSetting = require('../models/SystemSetting'); // Assuming you have a SystemSetting model

// Get system settings
exports.getSystemSettings = async (req, res) => {
  try {
    const settings = await SystemSetting.find();
    res.json(settings);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Update system settings
exports.updateSystemSettings = async (req, res) => {
  try {
    const { id } = req.params;
    const { key, value } = req.body;
    const setting = await SystemSetting.findByIdAndUpdate(id, { key, value }, { new: true });
    if (!setting) return res.status(404).json({ message: 'Setting not found' });
    res.json({ message: 'Setting updated successfully', setting });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
