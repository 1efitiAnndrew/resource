const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    notes_id: {
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

module.exports = mongoose.model('Note', noteSchema);
