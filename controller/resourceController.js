const Resource = require('../models/resourceModel');

const getResources = async (req, res) => {
    try {
        const resources = await Resource.find().populate('course_id');
        res.status(200).json(resources);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getResource = async (req, res) => {
    try {
        const resource = await Resource.findById(req.params.id).populate('course_id');
        if (!resource) return res.status(404).json({ message: 'Resource not found' });
        res.status(200).json(resource);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const postResource = async (req, res) => {
    try {
        const resource = new Resource(req.body);
        await resource.save();
        res.status(201).json(resource);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const putResource = async (req, res) => {
    try {
        const resource = await Resource.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!resource) return res.status(404).json({ message: 'Resource not found' });
        res.status(200).json(resource);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteResource = async (req, res) => {
    try {
        const resource = await Resource.findByIdAndDelete(req.params.id);
        if (!resource) return res.status(404).json({ message: 'Resource not found' });
        res.status(200).json({ message: 'Resource deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getResources,
    getResource,
    postResource,
    putResource,
    deleteResource
};
