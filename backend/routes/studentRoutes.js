const express = require("express");
const { getStudents, getStudentsCount, getStudent } = require("../controllers/studentController");
const router = express.Router();



// GET all students
router.get("/", getStudents);

router.get("/studentsCount", getStudentsCount);

//GET single student
router.get("/:id", getStudent);

module.exports = router;



