const Pastpaper = require('../models/pastpaperModel');

const getPastpapers = async (req, res) => {
    try {
        const pastpapers = await Pastpaper.find().populate('resource_id');
        res.status(200).json(pastpapers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getPastpaper = async (req, res) => {
    try {
        const pastpaper = await Pastpaper.findById(req.params.id).populate('resource_id');
        if (!pastpaper) return res.status(404).json({ message: 'Pastpaper not found' });
        res.status(200).json(pastpaper);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const postPastpaper = async (req, res) => {
    try {
        const pastpaper = new Pastpaper(req.body);
        await pastpaper.save();
        res.status(201).json(pastpaper);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const putPastpaper = async (req, res) => {
    try {
        const pastpaper = await Pastpaper.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!pastpaper) return res.status(404).json({ message: 'Pastpaper not found' });
        res.status(200).json(pastpaper);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deletePastpaper = async (req, res) => {
    try {
        const pastpaper = await Pastpaper.findByIdAndDelete(req.params.id);
        if (!pastpaper) return res.status(404).json({ message: 'Pastpaper not found' });
        res.status(200).json({ message: 'Pastpaper deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getPastpapers,
    getPastpaper,
    postPastpaper,
    putPastpaper,
    deletePastpaper
};
