const express = require("express");
const User = require("../models/users.model");

const router = express.Router();

/*

router.post("/users", async(req,res)=>{
    try{
const users= await User.create(req.body)
return res.status(201).send(users);
    }catch(err){
        res.status(500).send({message:err.message})
    }
  
});*/

router.get("/", async(req,res)=>{
    try{
        // const users= await User.find({}).lean().exec();
        // return res.status(201).send(users);

        let filter = (req.query.Location || req.query.jobTitle)?{$and:[]}:{};
        if (req.query.Location) {
          
          filter["$and"].push({ Location: { $eq: req.query.Location } });
        }
        if (req.query.jobTitle) {
          
          filter["$and"].push({ jobTitle: { $eq: req.query.jobTitle } });
        }
    
        // console.log(filter["$and"]);
        let page = req.query.page || 1;
        let perPage = req.query.perPage || 6;
        let skip = (page - 1) * perPage;
        let sortData = req.query.sort
          ? {
            salary: `${req.query.sort == "asc" ? 1 : -1}`,
            }
          : null;
        // console.log(sortData, req.query.sort);
        let totalPage = Math.ceil(
          (await User.find().countDocuments()) / perPage
        );
        const product = await User.find(filter)
          .skip(skip)
          .limit(perPage)
          .sort(sortData);
    
        return res.status(200).send({ product, totalPage });

    }catch(err){
        res.status(500).send({message:err.message})
    }
  
});



router.patch("/:id", async (req, res) => {
    try {
      const post = await User.findByIdAndUpdate(req.params.id, req.body,{new:true})
        .lean()
        .exec();
      return res.status(200).send(post);
    } catch (error) {
      return res.status(200).send(error.message);
    }

});
module.exports=router;