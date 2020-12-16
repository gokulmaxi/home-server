const mongoose = require("mongoose");
var Floor = require("../models/floor.model");
mongoose.connect(
  "mongodb://localhost:27017/homi",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to Db");
  }
);
//<-----adds floor---->
// var floor1=new Floor({
//     floorId:"first floor",
//     rooms:[]
// })

// floor1.save((err)=>{
//    if(err) return console.error(err);
//    console.log("succses")
// });
//<-----------add room------->
var room1 = {
  roomId: "kitchen3",
  switchBoards: [
    { switchBoardId: "board1", switches: [{ switchId: "switch1" }] },
  ],
};
Floor.update(
  {
    floorId: "first floor",
  },
  { $set: { "rooms.$[room].switchBoards.$[board].switches.$[switch].switchState":true } },
  {
    arrayFilters: [
      { "room.roomId": "kitchen 3"},{ "board.switchBoardId": "kitchen" },{"switch.switchId":"switch1"},
    ],
  },
  (err) => {
    if (err) return console.error(err);
    console.log("succses");
  }
);
