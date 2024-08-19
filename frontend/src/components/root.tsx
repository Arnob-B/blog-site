import { useNavigate } from "react-router-dom"
import { Outlet } from "react-router-dom";

function Root(){
  const nav = useNavigate();
  return(
    <div>
      <button onClick={()=>{nav("/createblog")}}>
        Create blogs
      </button>
      <button onClick={()=>{nav("/viewblog")}}>
        View blogs
      </button>
      <Outlet></Outlet>
    </div>
  )
}
export default Root;