import { Request, Response, NextFunction } from "express";
const jwt = require("jsonwebtoken");
const checkToken = (req:Request,res:Response,next:NextFunction)=>{
  try {
    const decoded = jwt.verify(req.headers.authorization,process.env.JWTSECRET);
    next();
  }
  catch(err){
    res.status(303);
    res.send(
      {
        msg:"accessDenied"
      }
    )
  }
}
export default checkToken;