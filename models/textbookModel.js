const mongoose = require('mongoose');

const textbookSchema = new mongoose.Schema({
    text_id: {
        type: String,
        required: true,
        unique: true
    },
    resource_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Resource',
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Textbook', textbookSchema);
