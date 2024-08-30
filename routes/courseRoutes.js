const express = require('express');
const router = express.Router();

const {
    createCourse,
    getCourses,
    getCourse,
    updateCourse,
    deleteCourse } = require('../controller/courseController');

// Route to create a new course
router.post('/', createCourse);

// Route to get all courses
router.get('/', getCourses);

// Route to get a specific course by ID
router.get('/:id', getCourse);

// Route to update a specific course by ID
router.put('/:id', updateCourse);

// Route to delete a specific course by ID
router.delete('/:id', deleteCourse);

module.exports = router;
