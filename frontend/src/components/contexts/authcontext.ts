import { createContext } from "react";
const userDetail = createContext<{
  mail:string,
  setMail: Function,
  uname : string, 
  setUname : Function,
  password : string, 
  setPassword : Function,
}>({
  mail:"",
  setMail: ()=>{},
  uname : "", 
  setUname : ()=>{},
  password : "", 
  setPassword : ()=>{},
});


export {userDetail} ;