const express = require('express');
const router = express.Router();
const { getNotes, getNote, postNote, putNote, deleteNote } = require('../controller/noteController');

router.get('/', getNotes);
router.get('/:id', getNote);
router.post('/', postNote);
router.put('/:id', putNote);
router.delete('/:id', deleteNote);

module.exports = router;
