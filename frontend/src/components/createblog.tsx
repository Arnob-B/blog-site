import { useState } from "react";
const CreateBlog=()=>{
  const [blogname, setblogname]  = useState("");
  const [content, setcontent]  = useState("");
  const submit = ()=>{
    console.log(blogname, content)
  }
  return(
    <div>
      <div>
        <input type="text" placeholder="Name" value={blogname} onChange={(e) => setblogname(e.target.value)} />
      </div>
      <div>
        <textarea placeholder="Content" value={content} onChange={(e) => setcontent(e.target.value)} />
      </div>
      <div>
        <button onClick={submit}>Submit</button>
      </div>
    </div>
  )
}
export default CreateBlog;