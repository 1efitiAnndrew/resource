const mongoose = require('mongoose');

const pastpaperSchema = new mongoose.Schema({
    paper_id: {
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

module.exports = mongoose.model('Pastpaper', pastpaperSchema);
