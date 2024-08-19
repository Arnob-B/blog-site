import { Button,Container} from "@chakra-ui/react";
import { useContext,  useState } from "react";
import { userDetail} from "../contexts/authcontext";
import StatusRenderer from "./alerts";
import {MailBox,PassBox,NameBox} from "./boxes"
import axios from "axios"


function SignUp(){
  const {mail,uname, password,setUname,setMail,setPassword} = useContext(userDetail);
  const [status, setStatus] = useState<number>(0);
  const submit =()=>{
    if( mail=="" || password == "" ||uname == "") return;
    const toSend:Object = {
      email:mail,
      uname:uname,
      password:password
    }
    axios.post('http://localhost:3000/auth/signup',toSend).then(value=>{
      console.log(value.status);
      console.log(value.data);
    }).catch((e) => {
      try {
        if (e.response.status === 400)
          {
            if(e.response.data.msg ==="userExist")
            console.log("username already Exists")
            else if(e.response.data.msg ==="emailExist")
            console.log("Email already Exists")
          }
        else 
        console.log("plse try again")
      }
      catch (e) {
        console.log("plse try again")
      }
    })
  }
  return(
    <div>
      <Container>
        <MailBox mail={mail} setMail={setMail}></MailBox>
        <NameBox uname={uname} setUname={setUname}></NameBox>
        <PassBox password={password} setPassword={setPassword}></PassBox>
        <Button  colorScheme="green" onClick={submit}>
          sumbit
        </Button>
        <StatusRenderer
        st={status}
        ></StatusRenderer>
      </Container>
    </div>
  )
}
function LogIn(){
  const {mail,setMail,password,setPassword} = useContext(userDetail);
  const submit = ()=>{
    if( mail=="" || password == "") return;
    axios.post("http://localhost:3000"+"/auth/login",{
      email:mail,
      password:password
    }).then(d =>{
      if(d.status ===200){
        alert("you are logged in ");
        localStorage.setItem("jwtToken",d.data.jwtToken);
      }
    }
    ).catch(e=>{
      console.log("error :-> ",e)
    })
  }
  return(
    <div>
      <Container>
        <MailBox mail={mail} setMail={setMail}></MailBox>
        <PassBox password={password} setPassword={setPassword}></PassBox>
        <Button colorScheme="green" onClick={submit}>
          sumbit
        </Button>
      </Container>
    </div>
  )
}


export {SignUp,LogIn};