import { useEffect, useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Main_blog_create_container from './components/blogcreate'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar />
        {/* <Footer /> */}
      </div>
    </>
  )
}

const App1=()=>{
  return(
    <>
    <Main_blog_create_container/>
    </>
  )
}
// import React from 'react';

const BlogCard = ({ title, desc}) => {
  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    margin: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const contentStyle = {
    padding: '10px',
  };

  return (
    <div style={cardStyle}>
      <div style={contentStyle}>
        <h3 style={{ fontSize: '20px', fontWeight: 'bold' }}>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

const BlogList = () => {
  const [blogs,setblog] = useState([
   { title: "Blog Title 1", desc: "This is the description of the first blog." },
   { title: "Blog Title 2", desc: "This is the description of the second blog." },
   { title: "Blog Title 3", desc: "This is the description of the third blog." },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/all-blogs');
        setBlogData(response.data);
      } catch (error) {
        console.error('Error fetching blog data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <BlogCard key={blog.title} {...blog} />
      ))}
    </div>
  );
};
// const blogs = [
//   { title: "Blog Title 1", desc: "This is the description of the first blog." },
//   { title: "Blog Title 2", desc: "This is the description of the second blog." },
//   { title: "Blog Title 3", desc: "This is the description of the third blog." },
// ];

function App3() {
  return (
    <div className="">
      <h1>My Blog</h1>
      <BlogList />
    </div>
  );
}

export default App3;

// export default App1
