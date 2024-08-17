import express from "express"
import authRoute from "./routes/authRoutes";
const dotenv = require("dotenv");
dotenv.config();
const app =  express();
app.use(express.json());

app.use("/auth/",authRoute);
app.get("/test",(req,res)=>{
  res.status(200);
  res.send({
    msg: " hello from server"
  });
})

app.listen(process.env.PORT,()=>{
  console.log(`application running on port ${process.env.PORT}`)
})