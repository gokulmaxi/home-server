const mongoose = require("mongoose");

// const RoomScheme = mongoose.Schema({
//   roomId: String,
//   roomIcon: {
//     Type: String,
//     enum: ["kitchen", "bedroom", "bathroom", "hall", "room"],
//   },
//   roomStatus: Boolean,
//   switchBoards: [{ type: mongoose.Schema.Types.ObjectId, ref: "switchBoard" }],
// });
// module.exports = mongoose.model("room", RoomScheme);
// var FloorSchema = mongoose.Schema({
//   floorId: String,
//   rooms: [RoomScheme],
// });
// module.exports = mongoose.model("floor", FloorSchema);
var FloorSchema = mongoose.Schema({
  floorId: String,
  rooms: [
    {
      roomId: String,
      switchBoards: [
        { switchBoardId: String, switches: [
            { switchId: String }] },
      ],
    },
  ],
});
module.exports = mongoose.model("floor", FloorSchema);
