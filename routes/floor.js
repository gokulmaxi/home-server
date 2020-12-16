const express = require("express");
const router = express.Router();

const Floor = require("../models/floor.model");

//get request data
router.get("/", async (req, res) => {
  try {
    const posts = await Floor.find();
    console.log(posts);
    res.send(posts);
  } catch (error) {
    console.log(error);
    res.json({ message: "hello" });
  }
});

router.post("/", async (req, res) => {
  console.log(req.body);
  const post = new Floor({
   floorId:req.body.Floor 
  });
  try {
    const savedPost = await post.save();

    res.json(savedPost);
  } catch (error) {
    res.json({ message: error });
    console.log(error);
  }
});
module.exports = router;