const Lecturer = require('../models/Lecturer');

const getLecturers = async (req, res) => {
    try {
        const lecturers = await Lecturer.find().populate(['course_id', 'resource_id', 'assignment_id']);
        res.status(200).json(lecturers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getLecturer = async (req, res) => {
    try {
        const lecturer = await Lecturer.findById(req.params.id).populate(['course_id', 'resource_id', 'assignment_id']);
        if (!lecturer) return res.status(404).json({ message: 'Lecturer not found' });
        res.status(200).json(lecturer);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const postLecturer = async (req, res) => {
    try {
        const lecturer = new Lecturer(req.body);
        await lecturer.save();
        res.status(201).json(lecturer);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const putLecturer = async (req, res) => {
    try {
        const lecturer = await Lecturer.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!lecturer) return res.status(404).json({ message: 'Lecturer not found' });
        res.status(200).json(lecturer);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteLecturer = async (req, res) => {
    try {
        const lecturer = await Lecturer.findByIdAndDelete(req.params.id);
        if (!lecturer) return res.status(404).json({ message: 'Lecturer not found' });
        res.status(200).json({ message: 'Lecturer deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getLecturers,
    getLecturer,
    postLecturer,
    putLecturer,
    deleteLecturer
};
