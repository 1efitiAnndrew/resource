const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid')

const studentSchema = new mongoose.Schema({
  student_id: {
    type: String,
    default: () => uuidv4(), // Auto-generate student_id using uuid
    unique: true,
  },
  studentName: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
    match: [/.+@.+\..+/, 'Please enter a valid email address'],
  },
  course_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'course', // Reference to the Course model
    required: true,
  },
});

module.exports = mongoose.model('Student', studentSchema);
