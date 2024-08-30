const express = require('express');
const router = express.Router();
const { getCourses, getCourse, postCourse, putCourse, deleteCourse } = require('../controller/courseController');

router.get('/', getCourses);
router.get('/:id', getCourse);
router.post('/', postCourse);
router.put('/:id', putCourse);
router.delete('/:id', deleteCourse);

module.exports = router;
