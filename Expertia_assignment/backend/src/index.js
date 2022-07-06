const express = require("express");
const cors=require("cors");
const app = express();

app.use(express.json());
app.use(cors());
const userController = require("./controllers/user.controllers");

app.use("/",userController);
module.exports = app;