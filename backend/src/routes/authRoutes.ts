import { Router } from "express";
import { Request, Response } from "express";
import pclient from "../client";
import checkToken from "../middlewares/checkToken";

const jwt = require("jsonwebtoken");


const route = Router();
enum scode {
  Ok=200,
  Cbad = 400
}

route.post("/signup", (req: Request, res: Response) => {
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
      email:req.body.email,
      password:req.body.password,
    }
  }).then(data => {
    if (data == null) {
      res.status(400);
      res.send({ msg: "wrong credentialss" })
    }
    else {
      try{
        console.log(jwt)
        jwt.sign({
          email : req.body.email,
          rand : Math.random()
        }, process.env.JWTSECRET, (err: any, token: any) => {
          if (err) {
            res.status(500);
            res.send({
              msg: "tokenGenerationFailed"
            });
          }
          else {
            res.status(200);
            res.send({
              msg: "loginSuccesfull",
              jwt: token
            });
          }
        })
      }
      catch(err){
        console.log(err);
        res.status(500)
        res.send({
          msg:"serverIssue"
        });
      }
    }
  }).catch(err=>{
    console.log("error : \n", err);
    res.status(500);
    res.send();
  })
})

route.get("/checking",checkToken,(req,res)=>{
  res.send({
    msg:"you have passwed the checking"
  });
})


export default route;