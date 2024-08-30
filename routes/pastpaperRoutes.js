const express = require('express');
const router = express.Router();
const { getPastpapers, getPastpaper, postPastpaper, putPastpaper, deletePastpaper } = require('../controller/pastpaperController');

router.get('/', getPastpapers);
router.get('/:id', getPastpaper);
router.post('/', postPastpaper);
router.put('/:id', putPastpaper);
router.delete('/:id', deletePastpaper);

module.exports = router;
