// controllers/RoleController.js

const Role = require('../models/Role'); // Assuming you have a Role model

// Get all roles
exports.getRoles = async (req, res) => {
  try {
    const roles = await Role.find();
    res.json(roles);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Create a new role
exports.createRole = async (req, res) => {
  try {
    const { name } = req.body;
    const newRole = new Role({ name });
    await newRole.save();
    res.status(201).json({ message: 'Role created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Update a role
exports.updateRole = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const role = await Role.findByIdAndUpdate(id, { name }, { new: true });
    if (!role) return res.status(404).json({ message: 'Role not found' });
    res.json({ message: 'Role updated successfully', role });
  } catch (error) {
    res.status{500).json({ message: 'Server error' });
  }
};

// Delete a role
exports.deleteRole = async (req, res) => {
  try {
    const { id } = req.params;
    const role = await Role.findByIdAndDelete(id);
    if (!role) return res.status(404).json({ message: 'Role not found' });
    res.json({ message: 'Role deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
