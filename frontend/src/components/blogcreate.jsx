import axios from 'axios'
const Titlebox=()=>{
  return(
    <>
    <input type="text" id='title' className='mb-4 mr-8 ml-8 p-6 rounded-md border-2 border-grey-500' placeholder='Enter the title'/>
    </>
  )
}
const Descbox=()=>{
  return(
    <>
    <textarea id='desc' placeholder="write your blog content here" className='m-4 p-2 h-60 rounded-md border-2 border-grey-500'>
    </textarea>
    </>
  )
}
const SubmitButton=()=>{
  const sendblog=async ()=>{
    const title = document.getElementById('title').value;
      const desc = document.getElementById('desc').value;
      if(title!=''&&desc!=''){
        const options= {
          method: 'POST',
          url:'http://localhost:3000/send-blog',
          data:[
            {
              title: title,
              desc: desc,
            }
          ]
        };
      axios.request(options)
      .then(response=>{
        alert('blog saved')
      })
      .catch(err=>{
        alert('got err')
      })
    }
  }
  return(
    <>
    <span>
<button onClick={sendblog} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
  Submit
</span>
</button>
    </span>
    </>
  )
}
const Main_blog_create_container=()=>{
  return(
    <div className="flex flex-col">
      <Titlebox/>
      <Descbox/>
      <SubmitButton></SubmitButton>
    </div>
  )
};
export default Main_blog_create_container;