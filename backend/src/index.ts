import express from "express"
const dotenv = require("dotenv");
dotenv.config();
const app =  express();
app.listen(process.env.PORT,()=>{
  console.log(`application running on port ${process.env.PORT}`)
})