import {Tabs,TabList,Tab, Breadcrumb,BreadcrumbItem ,BreadcrumbLink} from "@chakra-ui/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import authcontext from "../contexts/authcontext";
function NavigationPane(){
  const [email,setEmail] = useState<string>("");
  const [uname,setUname] = useState<string>("");
  const navigate = useNavigate();
  return(
    <authcontext.Provider value={[email,uname,setEmail,setUname]}>
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
    </authcontext.Provider>
  )
}
export default NavigationPane;