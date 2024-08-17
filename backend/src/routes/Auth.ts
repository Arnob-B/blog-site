import { Router } from "express";
import { Request, Response } from "express";
import pclient from "../client";
const route = Router();
enum scode {
  Ok=200,
  Cbad = 400
}

route.post("/signup", (req: Request, res: Response) => {
  console.log("here recievied")
  const userdata = req.body;
  pclient.user.findMany({
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
    console.log("process is here",data);
    if (data.length != 0) {
      data.forEach(e => {
        res.status(400);
        if (e.email === userdata.email) {
          res.send({
            msg: "emailExist"
          });
        }
        if (e.uname === userdata.uname) {
          res.send({
            msg: "userExist"
          });
        }
      });
    }
    else {
      //no user present like that
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
          msg: "userCreated"
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



route.post("/login", (req, res) => {
  pclient.user.findUnique({
    where: {
      email: req.body.eamil,
      password: req.body.password
    },
  }).then(data => {
    if (data == null) {
      res.status(400);
      res.send({ msg: "wrong credentials" })
    }
    else {
      res.status(200);
      res.send({
        msg: "user Exists"
      })
    }
  })
})

export default route;