const mongoose = require('../db');

const studentSchema = new mongoose.Schema({

    student_id: 
    { type: String, 
        required: true },

    studentName: {
         type: String,
          required: true 
        },

    Email: { 
        type: String, 
        required: true },

    course_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Course' }

}, 

{ 
    timestamps: true 
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
