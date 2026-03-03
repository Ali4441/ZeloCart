const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Username is required"],
    trim: true,
    minlength: 3,
    maxlength: 30,
    unique: true
  },

  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/\S+@\S+\.\S+/, "Invalid email format"]
  },

  password: {
    type: String,
    required: true,
    minlength: 6
  }

}, { timestamps: true });


userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

// Generate JWT Token
userSchema.methods.generateToken = function () {
  return jwt.sign(
    { userId: this._id },
    process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

// Compare password
userSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

module.exports = mongoose.model("User", userSchema);



