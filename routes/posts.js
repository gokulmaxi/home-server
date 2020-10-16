const express = require("express");
const router = express.Router();

const Floor = require("../models/floor.model");

//get request data
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    console.log(posts);
    res.send(posts);
  } catch (error) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  console.log(req.body);
  const post = new Floor({
    
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
