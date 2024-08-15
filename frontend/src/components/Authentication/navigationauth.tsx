import { Breadcrumb,BreadcrumbItem ,BreadcrumbLink} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import authcontext from "../contexts/authcontext";
function NavigationPane(){
  const [email,setEmail] = useState<string>("");
  const [uname,setUname] = useState<string>("");
  return(
    <authcontext.Provider value={[email,uname,setEmail,setUname]}>
      <div>
        <Breadcrumb separator='-'>
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to="/auth/signup">
              Sign up
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to="/auth/login">
              Log In
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Outlet></Outlet>
      </div>
    </authcontext.Provider>
  )
}
export default NavigationPane;