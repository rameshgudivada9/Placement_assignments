const mongoose = require("mongoose");

module.exports = ()=>{
    return mongoose.connect("mongodb+srv://expertia:expertia@cluster0.dxxqlk8.mongodb.net/?retryWrites=true&w=majority/detail");
};