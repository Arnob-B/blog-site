const mongoose = require('mongoose');
require('dotenv').config()
const dburl = process.env.DBURL;



//connecting to the mongoose server
mongoose.connect(dburl);
mongoose.connection.on('open',()=>{
  console.log("database connected");
})

//making the blog-schema
const blogschema = mongoose.Schema({
  title:{
    type: String,
    requried: true,
  },
  desc:
  {
    type: String,
    requried: true,
  }
})


//making a collection out of the blog-schema 
const Blog = new mongoose.model('blogs',blogschema);



module.exports = Blog;