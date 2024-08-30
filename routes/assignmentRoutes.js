const express = require('express');
const router = express.Router();
const { getAssignments, getAssignment, postAssignment, putAssignment, deleteAssignment } = require('../controller/assignmentController');

router.get('/', getAssignments);
router.get('/:id', getAssignment);
router.post('/', postAssignment);
router.put('/:id', putAssignment);
router.delete('/:id', deleteAssignment);

module.exports = router;
