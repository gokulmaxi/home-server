const mongoose = require("mongoose");

var FloorSchema = mongoose.Schema({
  floorId: String,
  floorIndex: Number,
  rooms: [
    {
      roomId: String,
      roomIndex: Number,
      roomIcon: String,
      roomStatus: String,

      switchBoards: [
        {
          switchBoardId: String,
          switches: [
            {
              switchId: String,
              switchState: Boolean,
              switchType:String
            },
          ],
        },
      ],
    },
  ],
});
module.exports = mongoose.model("floor", FloorSchema);
