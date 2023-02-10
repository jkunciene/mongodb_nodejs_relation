require('dotenv').config();
const connectDB = require('./config/db');

connectDB();

const express = require('express');
const app = express();
app.use(express.json());

const { createUser } = require('./controllers/usersController');
const { createCourse } = require('./controllers/coursesController');

app.post('/api/user', createUser);
app.post('/api/course', createCourse);

app.listen(process.env.PORT, ()=> {
    console.log(`Server is running on PORT ${process.env.PORT}`)
});