const Course = require('../models/courseModel');
const Resource = require('../models/resourceModel');

const createCourse = async (req, res) => {
    const { course_id, coursename, resource_id } = req.body;

    // Check for missing fields
    if (!course_id || !coursename || !resource_id) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    try {
        // Check if the resource_id exists
        const resourceExists = await Resource.findById(resource_id);
        if (!resourceExists) {
            return res.status(400).json({ message: 'Invalid resource_id' });
        }

        // Create a new course
        const course = new Course({ course_id, coursename, resource_id });
        await course.save();

        // Send success response
        res.status(201).json(course);
    } catch (error) {
        // Send error response
        res.status(400).json({ message: error.message });
    }
};

const getCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getCourse = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateCourse = async (req, res) => {
    try {
        const updatedCourse = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedCourse) {
            return res.status(404).json({ message: 'Course not found' });
        }
        res.status(200).json(updatedCourse);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteCourse = async (req, res) => {
    try {
        const deletedCourse = await Course.findByIdAndDelete(req.params.id);
        if (!deletedCourse) {
            return res.status(404).json({ message: 'Course not found' });
        }
        res.status(200).json({ message: 'Course deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createCourse,
    getCourses,
    getCourse,
    updateCourse,
    deleteCourse,
};
