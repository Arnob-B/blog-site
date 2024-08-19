import {Tabs,TabList,Tab, } from "@chakra-ui/react";
import {  useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import {userDetail} from "../contexts/authcontext";
function NavigationPane(){
  const [mail,setMail] = useState<string>("");
  const [uname,setUname] = useState<string>("");
  const [password,setPassword] = useState<string>("");
  const navigate = useNavigate();
  useEffect(()=>{
    if(localStorage.getItem("jwtToken") == null)
    navigate("/auth/signup");
    else {
      navigate('/');
    }
  },[]);
  return(
    <userDetail.Provider value={{
      mail:mail,
      setMail:setMail,
      uname:uname,
      setUname:setUname,
      password:password,
      setPassword:setPassword,
    }}>
        <Tabs  isFitted variant='enclosed' align="center">
          <TabList>
            <Tab onClick={()=>{
              navigate("/auth/signup");
            }}>
              Sign-Up
            </Tab>
            <Tab onClick={()=>{
              navigate("/auth/login");
            }}>
              Log-In
            </Tab>
          </TabList>
        </Tabs>
        <Outlet></Outlet>
    </userDetail.Provider>
  )
}
export default NavigationPane;