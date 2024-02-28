const express = require('express');
const cors = require('cors')
require('dotenv').config()
const Blog = require('./database/index');

const app = express();
app.use(express.json());

app.use(cors({
  origin: '*' 
}));
app.get('/all-blogs',(req,res)=>{
  console.log(req.url, 'got hit');
  Blog.find().then((result, err) => {
    if (err) {
      res.status(500).send('Bad server error');
    } else {
      res.status(200).json({
        "all-blogs": result
      });
    }
})});
app.post('/post-blog',(req,res)=>{
  const newblog =new Blog({
    title:req.body.title,
    desc: req.body.desc,
  })
  newblog.save().then(()=>{
    res.status(200).send('saved successfully')
  }).catch(err=>{
    res.status(500).send('cannot save ur blog')
  })
}
)


const PORT = process.env.PORT;
app.listen(PORT,()=>{
  console.log(`server started at ${PORT}....`)
})