const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
    resource_id: {
        type: String,
        required: true,
        unique: true
    },
    course_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true
    },
    resourceName: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Resource', resourceSchema);
