import { createBrowserRouter } from "react-router-dom";
import Root from "../components/root";
import CreateBlog from "../components/createblog";
import ViewBlog from "../components/viewblog";

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
  ]
);
export default RootRouter;