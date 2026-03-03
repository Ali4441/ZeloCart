const mongoose = require('mongoose');

const URL = "mongodb://127.0.0.1:27017/ZeloCart";

const connectionDB = async () => {
  try {
    await mongoose.connect(URL);
    console.log("Server connected to database");
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1); // stop server if DB fails
  }
};

module.exports = connectionDB;