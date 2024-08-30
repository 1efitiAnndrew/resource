const express = require('express');
const router = express.Router();
const { getTextbooks, getTextbook, postTextbook, putTextbook, deleteTextbook } = require('../controllers/textbookController');

router.get('/', getTextbooks);
router.get('/:id', getTextbook);
router.post('/', postTextbook);
router.put('/:id', putTextbook);
router.delete('/:id', deleteTextbook);

module.exports = router;
