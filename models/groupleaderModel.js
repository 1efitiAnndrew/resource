const mongoose = require('mongoose');

const groupleaderSchema = new mongoose.Schema({
    group_id: {
        type: String,
        required: true,
        unique: true
    },
    student_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: true
    },
    assign_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Assignment',
        required: true
    },
    uploadsolution: {
        type: String
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Groupleader', groupleaderSchema);
