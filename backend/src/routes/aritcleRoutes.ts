import { Router } from "express";
import pclient from "../client";
import { Request,Response } from "express";
import {checkToken,newReq} from "../middlewares/checkToken";
const routes = Router();


routes.post("/post",checkToken,async(req:newReq,res:Response)=>{
  const title = req.body.title;
  const content = req.body.content;
  const userId = req.userId;
  const data = await pclient.user.findUnique({
    where:{
      uname:req.userId
    }
  });
  if(data==null){
    res.status(400);
    res.send({
      msg:"invalidUser"
    });
    return;
  }
  else{
    pclient.article.create({
      data: {
        title: title,
        content: content,
        authorId: data.id as string
      }
    }).then(data => {
      res.status(200);
      res.send({
        msg: "articleSaved"
      });
    }
    )
      .catch(err => {
        res.status(500);
        res.send({
          msg: "dbError"
        });
      })
  }
})

routes.get("/:uname/:title",(req,res)=>{
  const title:string = req.params.title;
  const username:string = req.params.uname;
  pclient.user.findUnique({
    where:{
      uname:username
    }
  }
  ).then(data=>{
    if(data==null){
      res.status(400);
      res.send({
        msg:"errorFetchingUser"
      });
    }
    else{
      pclient.article.findUnique({
        where:{
          title:title,
          authorId:data.id
        }
      }).then(
        data => {
          if (data == null) {
            res.status(400);
            res.send({
              msg: "errorFetchingArticle"
            });
          }
          else{
            res.status(200);
            res.send({
              title:data.title,
              content:data.content
            })
          }
        }).catch(
        err=>{
          res.status(500);
          res.send({
            msg: "dbError"
          });
          console.log(err);
        }
      )
    }
  }).catch(err=>{
    res.status(500);
    res.send({
      msg:"dbError"
    });
    console.log(err)
  })
})

export default routes;