import { InputGroup,InputRightAddon,Input ,InputLeftAddon} from "@chakra-ui/react";
import { useState } from "react";
function MailBox({mail,setMail}:any){
  return (
    <div>
      <InputGroup m="2">
        <InputLeftAddon > Mail </InputLeftAddon>
        <Input placeholder="" size='md'
          value={mail}
          onChange={e => setMail(e.target.value)}
        ></Input>
      </InputGroup>
    </div>
  )
}
function NameBox({uname,setUname}:any){
  return (
    <div>
      <InputGroup m="2">
        <InputLeftAddon > username </InputLeftAddon>
        <Input placeholder="" size='md'
          value={uname}
          onChange={e => setUname(e.target.value)}
        ></Input>
      </InputGroup>
    </div>
  )
}

function PassBox({password,setPassword}:any){
  const [show,setShow] = useState<boolean>(false);
  return (
    <div>
        <InputGroup m="2">
          <InputLeftAddon> Password </InputLeftAddon>
          <Input placeholder="" size='md'
            type={show ? 'text' : 'password'}
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value);
            }}
          ></Input>
          <InputRightAddon onClick={() => {
            setShow(!show);
          }}>
            {show ? "hide" : "show"}
          </InputRightAddon>
        </InputGroup>
    </div>
  )
}
export {MailBox,PassBox,NameBox}