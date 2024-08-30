const express = require('express');
const router = express.Router();
const { getResources, getResource, postResource, putResource, deleteResource } = require('../controllers/resourceController');

router.get('/', getResources);
router.get('/:id', getResource);
router.post('/', postResource);
router.put('/:id', putResource);
router.delete('/:id', deleteResource);

module.exports = router;
