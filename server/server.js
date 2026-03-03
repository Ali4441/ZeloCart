const express = require("express");
const app = express();
const router = require('./route/auth-router');
const connectionDB = require('./utils/dbt');
const productRoute = require("./route/pdct-router");
const cors = require("cors");
const PORT = 1000;



app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.use(cors({
  origin: "http://localhost:5173"
}));


app.use("/api", productRoute);
app.use("/api/auth", router);

const startServer = async () => {
  try {
    await connectionDB();

    app.listen(PORT, () => {
      console.log("Server connected to Port", PORT);
    });
  } catch (error) {
    console.log("Server failed to start");
  }
};

startServer();