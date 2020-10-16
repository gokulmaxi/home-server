const mongoose = require("mongoose");
var Floor=require('../models/floor.model')
mongoose.connect("mongodb://localhost:27017/home", { useNewUrlParser: true,useUnifiedTopology: true ,},()=>{
    console.log('connected to Db');
  });
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
var room1={
  roomId: "Bed room",
  switchBoards: [
    { switchBoardId: "board1", switches: [
        { switchId: "switch1" }] },
  ],
}
Floor.update({
floorId:"first floor"},{$push:{'rooms':room1}},(err)=>{
  if(err)return console.error(err);
  console.log("succses")
})