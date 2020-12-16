const express = require("express");
const router = express.Router();

const Floor = require("../models/floor.model");

//get request data
router.get("/", async (req, res) => {
  try {
    console.log(req.body);
    const posts = await Floor.find({ floorId: req.body.FloorId });
    console.log(posts);
    res.send(posts);
  } catch (error) {
    console.log(error);
    res.json({ message: "hello" });
  }
});

router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    var switches = { switchId: req.body.switch };
    savedPost = Floor.findOneAndUpdate(
      { floorId: req.body.FloorId },
      { $push: { "rooms.$[room].switchBoards.$[swBoard].switches": switches } },
      {
        arrayFilters: [
          { "room.roomId": req.body.roomId },
          { "swBoard.switchBoardId": req.body.switchBoardId },
        ],
      },
      function (error, success) {
        if (error) {
          console.log(error);
          console.log("error");
          res.send(error)
        } else {
          console.log(success);
        res.send("addes")
        }
      }
    );
  } catch (error) {
    res.json({ message: error });
    console.log(error);
  }
});
module.exports = router;
