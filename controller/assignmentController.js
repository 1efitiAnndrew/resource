const Assignment = require('../models/Assignment');

const getAssignments = async (req, res) => {
    try {
        const assignments = await Assignment.find().populate('resource_id');
        res.status(200).json(assignments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAssignment = async (req, res) => {
    try {
        const assignment = await Assignment.findById(req.params.id).populate('resource_id');
        if (!assignment) return res.status(404).json({ message: 'Assignment not found' });
        res.status(200).json(assignment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const postAssignment = async (req, res) => {
    try {
        const assignment = new Assignment(req.body);
        await assignment.save();
        res.status(201).json(assignment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const putAssignment = async (req, res) => {
    try {
        const assignment = await Assignment.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!assignment) return res.status(404).json({ message: 'Assignment not found' });
        res.status(200).json(assignment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteAssignment = async (req, res) => {
    try {
        const assignment = await Assignment.findByIdAndDelete(req.params.id);
        if (!assignment) return res.status(404).json({ message: 'Assignment not found' });
        res.status(200).json({ message: 'Assignment deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAssignments,
    getAssignment,
    postAssignment,
    putAssignment,
    deleteAssignment
};
