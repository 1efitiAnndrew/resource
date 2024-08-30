const express = require('express');
const router = express.Router();

const {
    createResource,
    getResources,
    getResource,
    updateResource,
    deleteResource
} = require('../controller/resourceController');

// Route to create a new resource
router.post('/', createResource);

// Route to get all resources
router.get('/', getResources);

// Route to get a specific resource by ID
router.get('/:id', getResource);

// Route to update a specific resource by ID
router.put('/:id', updateResource);

// Route to delete a specific resource by ID
router.delete('/:id', deleteResource);

module.exports = router;
