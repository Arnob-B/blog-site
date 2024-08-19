import { createBrowserRouter } from "react-router-dom";
import Root from "../components/root";
import CreateBlog from "../components/createblog";
import ViewBlog from "../components/viewblog";
import Authnavigation from "../components/Authentication/navigationauth";
import {LogIn,SignUp} from "../components/Authentication/auth";
import authcontext from "../components/contexts/authcontext";
import { useState } from "react";

const RootRouter = createBrowserRouter(
  [
    {
      path:"/",
      element : <Root/>,
      children:[
        {
          path:"/createblog",
          element: <CreateBlog/>
        },
        {
          path:"/viewblog",
          element:<ViewBlog/>
        }
      ]
    },
    {
      path:"/auth",
      element:
      <Authnavigation/>,
      children:[
        {
          path:"/auth/signup",
          element:<SignUp></SignUp>
        },
        {
          path:"/auth/login",
          element:<LogIn></LogIn>
        }
      ]
    }
  ]
);
export default RootRouter;