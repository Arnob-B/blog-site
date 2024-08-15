import { Router } from "express";
import { Request, Response } from "express";
import { PrismaClient } from "../generated/clients"
const route = Router();
const pclient = new PrismaClient();
enum scode {
  Ok=200,
  Cbad = 400
}

route.post("/signin", (req: Request, res: Response) => {
  const userdata = req.body;
  pclient.user.create({
    data: {
      email: userdata.email,
      uname: userdata.uname,
      password: userdata.password
    }
  }
  ).then((data:any)=>{
    console.log(data);
    res.status(scode.Ok);
    res.send();
  }).catch((e:any)=>{
    res.status(scode.Cbad)
    console.log(e);
    res.send({
      error:e
    })
  });
});



export default route;