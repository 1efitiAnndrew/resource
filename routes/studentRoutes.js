const express = require('express');
const router = express.Router();
const { getStudents, getStudent, postStudent, putStudent, deleteStudent } = require('../controller/studentController');
;

router.get('/', getStudents);
router.get('/:id', getStudent);
router.post('/', postStudent);
router.put('/:id', putStudent);
router.delete('/:id', deleteStudent);

module.exports = router;
