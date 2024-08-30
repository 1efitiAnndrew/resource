const mongoose = require('mongoose');

const lecturerSchema = new mongoose.Schema({
    lecturer_id: {
        type: String,
        required: true,
        unique: true
    },
    lecturerName: {
        type: String,
        required: true
    },
    course_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true
    },
    resource_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Resource',
        required: true
    },
    assignment_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Assignment',
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Lecturer', lecturerSchema);
