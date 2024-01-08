const express = require("express");
const {
  getStudents,
  getStudentsCount,
  getStudent,
  deleteStudent,
} = require("../controllers/studentController");
const router = express.Router();

// GET all students
router.get("/", getStudents);

router.get("/studentsCount", getStudentsCount);

//GET single student
router.get("/:id", getStudent);

//delete student
router.delete("/:id", deleteStudent);

module.exports = router;
