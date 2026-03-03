const User = require("../models/user-model");
const Contact = require("../models/contact-model");
const bcrypt = require("bcrypt");
const register = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;

    if (!name || !email || !password || !confirmPassword) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const userCreate = await User.create({
      name,
      email,
      password   // ❌ confirmPassword remove kar diya
    });

    res.status(201).json({
      message: "Registration successful",
      user: {
        id: userCreate._id,
        name: userCreate.name,
        email: userCreate.email
      }
    });

  } catch (error) {
    console.log("FULL ERROR:", error);
    res.status(500).json({ error: error.message });
  }
};

const contact = async (req, res) => {
  try {
    console.log(req.body);
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Save contact info
    const contactInfo = await Contact.create({ name, email, subject, message });

    res.status(201).json({
      message: "Contact form submitted successfully",
      contact: {
        id: contactInfo._id,
        name: contactInfo.name,
        email: contactInfo.email,
        subject: contactInfo.subject,
        message: contactInfo.message
      }
    });

  } catch (error) {
    console.log("FULL ERROR:", error);
    res.status(500).json({ error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).send("User not found");
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return res.status(400).send("Invalid password");
    }

    const token = user.generateToken();

    res.status(200).json({
      message: "Login successful",
      token
    });
    console.log(token);
  } catch (error) {
    res.status(500).send("Server error");
  }
};




module.exports = { register, contact, login };