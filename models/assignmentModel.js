const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
    assign_id: {
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

module.exports = mongoose.model('Assignment', assignmentSchema);
