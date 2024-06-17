// models/SystemSetting.js

const mongoose = require('mongoose');

const SystemSettingSchema = new mongoose.Schema({
  key: {
    type: String,
    required: true,
    unique: true,
  },
  value: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('SystemSetting', SystemSettingSchema);
