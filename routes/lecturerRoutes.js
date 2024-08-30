const express = require('express');
const router = express.Router();
const { getLecturers, getLecturer, postLecturer, putLecturer, deleteLecturer } = require('../controllers/lecturerController');

router.get('/', getLecturers);
router.get('/:id', getLecturer);
router.post('/', postLecturer);
router.put('/:id', putLecturer);
router.delete('/:id', deleteLecturer);

module.exports = router;
