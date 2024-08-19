import { Router } from "express";
import { Request, Response } from "express";
import pclient from "../client";
import checkToken from "../middlewares/checkToken";
import crytpo from "crypto"

const jwt = require("jsonwebtoken");


const route = Router();
enum scode {
  Ok=200,
  Cbad = 400
} 

route.post("/signup", (req: Request, res: Response) => {
  pclient.user.findMany({
    where: {
      OR: [
        {
          email: req.body.email
        },
        {
          uname: req.body.uname
        }
      ]
    }
  }).then((data) => {
    if (data.length != 0) {
      data.forEach(e => {
        res.status(400);
        if (e.email === req.body.email) {
          res.send({
            msg: "emailExist"
          });
        }
        if (e.uname === req.body.uname) {
          res.send({
            msg: "userExist"
          });
        }
      });
    }
    else {
      //no user present like that
      const hashed = crytpo.createHash('sha-256').update(req.body.password).digest('hex');
      pclient.user.create(
        {
          data: {
            email: req.body.email,
            uname: req.body.uname,
            password: hashed,
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
  const hashed = crytpo.createHash('sha-256').update(req.body.password).digest('hex');
  pclient.user.findUnique({
    where: {
      email:req.body.email,
      password:hashed,
    }
  }).then(data => {
    if (data == null) {
      res.status(400);
      res.send({ msg: "wrongCredentials" })
    }
    else {
      try{
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
              jwtToken: token
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