import React from 'react';

const BlogCard = ({ title, description }) => {
  return (
    <div className="blog-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const blogs = [
  { title: "Blog Title 1", desc: "This is the description of the first blog." },
  { title: "Blog Title 2", desc: "This is the description of the second blog." },
  { title: "Blog Title 3", desc: "This is the description of the third blog." },
];

const BlogList = () => {
  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <BlogCard key={blog.title} {...blog} />
      ))}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <h1>My Blog</h1>
      <BlogList />
    </div>
  );
}

export default App;
