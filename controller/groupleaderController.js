const Groupleader = require('../models/Groupleader');

const getGroupleaders = async (req, res) => {
    try {
        const groupleaders = await Groupleader.find().populate(['student_id', 'assign_id']);
        res.status(200).json(groupleaders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getGroupleader = async (req, res) => {
    try {
        const groupleader = await Groupleader.findById(req.params.id).populate(['student_id', 'assign_id']);
        if (!groupleader) return res.status(404).json({ message: 'Groupleader not found' });
        res.status(200).json(groupleader);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const postGroupleader = async (req, res) => {
    try {
        const groupleader = new Groupleader(req.body);
        await groupleader.save();
        res.status(201).json(groupleader);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const putGroupleader = async (req, res) => {
    try {
        const groupleader = await Groupleader.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!groupleader) return res.status(404).json({ message: 'Groupleader not found' });
        res.status(200).json(groupleader);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteGroupleader = async (req, res) => {
    try {
        const groupleader = await Groupleader.findByIdAndDelete(req.params.id);
        if (!groupleader) return res.status(404).json({ message: 'Groupleader not found' });
        res.status(200).json({ message: 'Groupleader deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getGroupleaders,
    getGroupleader,
    postGroupleader,
    putGroupleader,
    deleteGroupleader
};
