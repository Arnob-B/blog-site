import express from "express"
import authroute from "./routes/Auth";
const dotenv = require("dotenv");
dotenv.config();
const app =  express();
app.use(express.json());

app.use("/auth/",authroute);

app.listen(process.env.PORT,()=>{
  console.log(`application running on port ${process.env.PORT}`)
})