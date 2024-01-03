const Member = require("../models/memberModel");
const mongoose = require("mongoose");

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

// update member
