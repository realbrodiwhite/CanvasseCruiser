// models/SystemMetrics.js

const mongoose = require('mongoose');

const SystemMetricsSchema = new mongoose.Schema({
  metricName: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  recordedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('SystemMetrics', SystemMetricsSchema);
