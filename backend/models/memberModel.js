const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");
const Schema = mongoose.Schema;

const memberSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    universityID: {
      type: Number,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// static signup method
memberSchema.statics.signUp = async function (
  firstName,
  lastName,
  email,
  universityID,
  password
) {
  // validation
  if (!firstName || !lastName || !email || !universityID || !password) {
    throw Error("All fields must be filled");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email is not valid");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Password is not strong enough");
  }
  const existsEmail = await this.findOne({ email });
  const existsUniId = await this.findOne({ universityID });

  if (existsEmail || existsUniId) {
    throw Error("User already exists");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const member = await this.create({
    firstName,
    lastName,
    email,
    universityID,
    password: hash,
  });

  return member;
};

// static login method
memberSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields must be filled");
  }
  const member = await this.findOne({ email });

  if (!member) {
    throw Error("Incorrect email");
  }

  const match = await bcrypt.compare(password, member.password);

  if (!match) {
    throw Error("Incorrect password");
  }

  return member;
};
module.exports = mongoose.model("member", memberSchema);
