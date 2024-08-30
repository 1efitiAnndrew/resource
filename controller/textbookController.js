const Textbook = require('../models/Textbook');

const getTextbooks = async (req, res) => {
    try {
        const textbooks = await Textbook.find().populate('resource_id');
        res.status(200).json(textbooks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getTextbook = async (req, res) => {
    try {
        const textbook = await Textbook.findById(req.params.id).populate('resource_id');
        if (!textbook) return res.status(404).json({ message: 'Textbook not found' });
        res.status(200).json(textbook);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const postTextbook = async (req, res) => {
    try {
        const textbook = new Textbook(req.body);
        await textbook.save();
        res.status(201).json(textbook);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const putTextbook = async (req, res) => {
    try {
        const textbook = await Textbook.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!textbook) return res.status(404).json({ message: 'Textbook not found' });
        res.status(200).json(textbook);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteTextbook = async (req, res) => {
    try {
        const textbook = await Textbook.findByIdAndDelete(req.params.id);
        if (!textbook) return res.status(404).json({ message: 'Textbook not found' });
        res.status(200).json({ message: 'Textbook deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getTextbooks,
    getTextbook,
    postTextbook,
    putTextbook,
    deleteTextbook
};
