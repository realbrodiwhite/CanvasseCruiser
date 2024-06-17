const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken'); 
const bcrypt = require('bcryptjs');
// For password hashing

require('dotenv').config();

// Database Connection
mongoose.connect(process.env.DB_URL)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(express.json()); // Parse JSON request bodies

// Authentication Middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.status(401).json({ message: 'Unauthorized: No token provided' });
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: 'Unauthorized: Invalid token' });
    req.user = user; // Attach the decoded user object to the request
    next();
  });
};

// 4. API Routes and Controllers
const userController = require('./controllers/UserController'); 

// User API Endpoints (Protected by authentication middleware)
app.post('/api/users/register', userController.registerUser);
app.post('/api/users/login', userController.loginUser); 
app.get('/api/users', authenticateToken, userController.getUsers); 
app.post('/api/users', authenticateToken, userController.createUser);
app.put('/api/users/:id', authenticateToken, userController.updateUser); 
app.delete('/api/users/:id', authenticateToken, userController.deleteUser);

// Role API Endpoints (Protected by authentication middleware)
const roleController = require('./controllers/RoleController');
app.get('/api/roles', authenticateToken, roleController.getRoles);
app.post('/api/roles', authenticateToken, roleController.createRole);
app.put('/api/roles/:id', authenticateToken, roleController.updateRole);
app.delete('/api/roles/:id', authenticateToken, roleController.deleteRole);
// System Settings API Endpoint (Protected by authentication middleware)
const systemSettingController = require('./controllers/SystemSettingController'); 
app.get('/api/system-settings', authenticateToken, systemSettingController.getSystemSettings);
app.post('/api/system-settings', authenticateToken, systemSettingController.updateSystemSettings);

// Audit Logs API Endpoint (Protected by authentication middleware)
const auditLogController = require('./controllers/AuditLogController');
app.get('/api/audit-logs', authenticateToken, auditLogController.getAuditLogs);

// Canvasser Performance API Endpoint (Protected by authentication middleware)
const canvasserPerformanceController = require('./controllers/CanvasserPerformanceController');
app.get('/api/canvasser-performance', authenticateToken, canvasserPerformanceController.getCanvasserPerformance);

// Routes API Endpoint (Protected by authentication middleware)
const routeController = require('./controllers/RouteController');
app.get('/api/routes', authenticateToken, routeController.getRoutes);

// System Metrics API Endpoint (Protected by authentication middleware)
const systemMetricsController = require('./controllers/SystemMetricsController');
app.get('/api/system-metrics', authenticateToken, systemMetricsController.getSystemMetrics);

// ... (Implement other API endpoints similarly) ...

// Start Server
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server listening on port ${process.env.PORT || 3000}`);
});