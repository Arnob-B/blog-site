import { Router } from "express";
import { Request, Response } from "express";
import { PrismaClient } from "../generated/clients"
const route = Router();
const pclient = new PrismaClient();
enum scode {
  Ok=200,
  Cbad = 400
}

route.post("/signin",(req: Request, res: Response) => {
  const userdata = req.body;
  pclient.user.findFirst({
    where: {
      OR: [
        {
          email: userdata.email
        },
        {
          uname: userdata.uname
        }
      ]
    }
  }).then((data) => {
    if (data != null) {
      res.status(400);
      res.send({
        msg: "user already present"
      });
    }
    else {
      pclient.user.create(
        {
          data: {
            email: userdata.email,
            uname: userdata.uname,
            password: userdata.password,
          }
        }
      ).then(data => {
        res.status(200);
        res.send({
          msg: "user created"
        });
      }).catch(e => {
        console.log("error : \n", e);
        res.status(500);
        res.send();
      })
    }
  }).catch(e => {
    console.log("error : \n", e);
    res.status(500);
    res.send();
  })
});



export default route;