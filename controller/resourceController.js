const Resource = require('../models/resourceModel');
const Course = require('../models/courseModel');

const createResource = async (req, res) => {
    const { resource_id, course_id, resourceName } = req.body;

    if (!resource_id || !course_id || !resourceName) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    try {
        // Check if the course_id exists
        const courseExists = await Course.findById(course_id);
        if (!courseExists) {
            return res.status(400).json({ message: 'Invalid course_id' });
        }

        const resource = new Resource({ resource_id, course_id, resourceName });
        await resource.save();
        res.status(201).json(resource);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

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
        if (!resource) {
            return res.status(404).json({ message: 'Resource not found' });
        }
        res.status(200).json(resource);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateResource = async (req, res) => {
    try {
        const updatedResource = await Resource.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate('course_id');
        if (!updatedResource) {
            return res.status(404).json({ message: 'Resource not found' });
        }
        res.status(200).json(updatedResource);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteResource = async (req, res) => {
    try {
        const deletedResource = await Resource.findByIdAndDelete(req.params.id);
        if (!deletedResource) {
            return res.status(404).json({ message: 'Resource not found' });
        }
        res.status(200).json({ message: 'Resource deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createResource,
    getResources,
    getResource,
    updateResource,
    deleteResource
};
