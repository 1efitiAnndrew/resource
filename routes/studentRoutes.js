const express = require('express');
const router = express.Router();
const { createStudent, getStudents, getStudent, putStudent, deleteStudent } = require('../controller/studentController');
;
router.post('/', createStudent);
router.get('/', getStudents);
router.get('/:id', getStudent);
router.put('/:id', putStudent);
router.delete('/:id', deleteStudent);

module.exports = router;
