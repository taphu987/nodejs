const Course = require("../models/Course");

const { multipleMongooseToObject } = require("../../utils/mongoose");

class MeController {
    // [GET] /me/stored/courses
    storedCourses(req, res) {
        res.render("search");
    }
}

module.exports = new MeController();
