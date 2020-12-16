require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
mongoose.connect(
  process.env.DATABASE_URL,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  () => {
    console.log("connected to Db");
  }
);
// import routes
const postsRoute = require("./routes/floor");
const roomRoute = require("./routes/room");
const swboardRoute = require("./routes/switchBoard");
const switchesRoute = require("./routes/switch");
app.use("/floor", bodyParser.json(), postsRoute);
app.use(bodyParser.json());
app.use("/room", bodyParser.json(), roomRoute);
app.use("/swboard", bodyParser.json(), swboardRoute);
app.use("/switch", bodyParser.json(), switchesRoute);
// start listening to the server
app.listen(process.env.PORT, () =>
  console.log(`server has started at port ${process.env.PORT}`)
);
