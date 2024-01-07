const mongoose = require("mongoose");
const Student = require("../models/memberModel");

// get all students
const getStudents = async (req, res) => {
  try {
    // const memberID = req.member._id; ///
    const students = await Student.find({}).sort({ createdAt: -1 }); ///
    res.status(200).json(students);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//students count
const getStudentsCount = async (req, res) => {
  try {
    const studentsCount = await Student.countDocuments({});
    res.status(200).json({ count: studentsCount });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// get single student
const getStudent = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Not a Student" });
  }
  const Student = await Student.findById(id);

  if (!Student) {
    return res.status(404).json({ msg: "Student not found" });
  }
  res.status(200).json(book);
};

module.exports = {
  getStudentsCount,
  getStudents,
  getStudent,
};
