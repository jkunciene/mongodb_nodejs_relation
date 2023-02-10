const Course = require('../models/Course');

const createCourse = async (req, res) => {
    if(!req.body.name || !req.body.author){ 
        res.status(404).send("Not found")}

        const course = await Course.create({
            name: req.body.name,
            author: req.body.author,
       })
        res.status(200).json(course)
}

const getCourses = async (req, res) => {
    
    const courses = await Course
    .find()
    .populate('author', 'name about -_id')

        if(!courses) {res.status(404).send("Not found")}
        else {
            res.status(200).json(courses)
        }      

}
module.exports = {
    createCourse,
    getCourses
}