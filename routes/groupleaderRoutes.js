const express = require('express');
const router = express.Router();
const { getGroupleaders, getGroupleader, postGroupleader, putGroupleader, deleteGroupleader } = require('../controller/groupleaderController');

router.get('/', getGroupleaders);
router.get('/:id', getGroupleader);
router.post('/', postGroupleader);
router.put('/:id', putGroupleader);
router.delete('/:id', deleteGroupleader);

module.exports = router;
