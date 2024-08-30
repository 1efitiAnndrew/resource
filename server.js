const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// Import routes
const studentRoutes = require('./routes/studentRoutes');
const lecturerRoutes = require('./routes/lecturerRoutes');
const resourceRoutes = require('./routes/resourceRoutes');
const courseRoutes = require('./routes/courseRoutes');
const pastpaperRoutes = require('./routes/pastpaperRoutes');
const textbookRoutes = require('./routes/textbookRoutes');
const noteRoutes = require('./routes/noteRoutes');
const assignmentRoutes = require('./routes/assignmentRoutes');
const groupleaderRoutes = require('./routes/groupleaderRoutes');

// Use routes
app.use('/api/students', studentRoutes);
app.use('/api/lecturers', lecturerRoutes);
app.use('/api/resources', resourceRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/pastpapers', pastpaperRoutes);
app.use('/api/textbooks', textbookRoutes);
app.use('/api/notes', noteRoutes);
app.use('/api/assignments', assignmentRoutes);
app.use('/api/groupleaders', groupleaderRoutes);


mongoose.connect(MONGO_URL)
.then(() => {
    console.log('connected to MongoDB')
    app.listen(PORT, () =>{console.log(`Andrew is coding at port ${PORT}`)})
    
}).catch((error) => {
    console.log(error)
});

