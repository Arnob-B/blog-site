import { Button,InputGroup,InputRightAddon,Input ,InputLeftAddon,Container} from "@chakra-ui/react";
import { useContext, useState } from "react";
import authcontext from "../contexts/authcontext";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'
function StatusRenderer({st}){
  console.log("here",st);
  switch(st){
    case(0):{
      return
      (
        <div></div>
      );
    }
    case(1):{
      return(
        <div>
          <Alert status='error'>
            <AlertTitle>MailExist</AlertTitle>
          </Alert>
        </div>
      )
    }
    case(2):{
      return(
        <div>
          <Alert status='error'>
            <AlertTitle>UserExit</AlertTitle>
          </Alert>
        </div>
      )
    }
    case(3):{
      return(
        <div>
          <Alert status='success'>
            <AlertTitle>success</AlertTitle>
          </Alert>
        </div>
      )
    }
  }
}
function SignUp(){
  const [email,uname,setEmail,setUname] = useContext(authcontext);
  const [show,setShow] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [status, setStatus] = useState<number>(0);
  const submit =()=>{
    const toSend:Object = {
      email:email,
      uname:uname,
      password:password,
    }
    setStatus(3);
    console.log(toSend);
  }
  return(
    <div>
      <Container>
        <InputGroup m="2">
          <InputLeftAddon > Mail </InputLeftAddon>
          <Input placeholder="" size='md'
          value={email}
          onChange={e=>setEmail(e.target.value)}
         ></Input>
        </InputGroup>
        <InputGroup m="2">
          <InputLeftAddon > Username </InputLeftAddon>
          <Input placeholder="" size='md'
          value = {uname}
          onChange={e=>setUname(e.target.value)}
          ></Input>
        </InputGroup>
        <InputGroup m="2">
          <InputLeftAddon> Password </InputLeftAddon>
          <Input placeholder="" size='md'
            type={show ? 'text' : 'password'}
          ></Input>
          <InputRightAddon onClick={() => {
            setShow(!show);
          }}>
            {show ? "hide" : "show"}
          </InputRightAddon>
        </InputGroup>
        <Button colorScheme="green" onClick={submit}>
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
  return(
    <div>
      LogIn
    </div>
  )
}


export {SignUp,LogIn};