const Member = require("../models/memberModel");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

// get member
const getMember = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such member" });
  }
  const member = await Member.findById(id);

  if (!member) {
    return res.status(404).json({ msg: "Member not found" });
  }
  res.status(200).json(member);
};

//login
const loginMember = async (req, res) => {
  const { email, password } = req.body;

  try {
    const member = await Member.login(email, password);

    // create a token
    const token = createToken(member.id);
    res.status(200).json({
      msg: "Member logged in successfully",
      token,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
// post member //signup
const addMember = async (req, res) => {
  const { firstName, lastName, email, universityID, password } = req.body;

  try {
    const member = await Member.signUp(
      firstName,
      lastName,
      email,
      universityID,
      password
    );

    // create a token
    const token = createToken(member.id);
    res.status(200).json({
      msg: "Member added successfully",
      token,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// update member
const updateMember = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such member" });
  }

  const member = await Member.findOneAndUpdate({ _id: id }, { ...req.body });

  if (!member) {
    return res.status(404).json({ error: "No such member" });
  }
  res.status(200).json(member);
};

module.exports = {
  getMember,
  loginMember,
  addMember,
  updateMember,
};
