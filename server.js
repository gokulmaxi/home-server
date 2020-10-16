require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const bodyParser=require('body-parser');
const app = express();
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true,useUnifiedTopology: true ,},()=>{
  console.log('connected to Db');
});
// import routes
const postsRoute=require('./routes/posts')
app.use('/posts',bodyParser.json(),postsRoute);
app.use(bodyParser.json());
















9


// start listening to the server
app.listen(process.env.PORT, () =>
  console.log(`server has started at port ${process.env.PORT}`)
);
