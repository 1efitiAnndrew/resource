const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    course_id: {
        type: String,
        required: true,
        unique: true
    },
    coursename: {
        type: String,
        required: true
    },
    resource_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'resource' // Match this with the model name you use
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Course', courseSchema);
