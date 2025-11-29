const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// @desc    Get all projects
// @route   GET /api/projects
// @access  Public
router.get('/', async (req, res) => {
    try {
        const projects = await Project.find({});
        res.json(projects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
