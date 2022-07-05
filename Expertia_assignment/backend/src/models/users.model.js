const mongoose = require("mongoose");

const userSchema = new mongoose.Schema (
    {  
      CompanyName:{type:String},
      jobTitle:{type:String},
      salary:{type:Number},
      Location:{type:String},
      skills:[{type:String}]
    },
    {
        versionKey:false,
    }
);

const User = mongoose.model("jobs",userSchema)
module.exports = User;