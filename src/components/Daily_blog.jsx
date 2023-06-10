import React, { useState } from 'react';
import '../style/Daily_blog.css';

import { blogs } from './daily_data';
const DailyBlog = () => {
  

  const [expandedBlogs, setExpandedBlogs] = useState([]);

  const toggleExpand = (date) => {
    if (expandedBlogs.includes(date)) {
      setExpandedBlogs(expandedBlogs.filter((d) => d !== date));
    } else {
      setExpandedBlogs([...expandedBlogs, date]);
    }
  };

  return (
    <div className='container'>
      <h1 className='main-blog-title'>My Daily Blogs</h1>
      {blogs.map((blog) => (
        <div key={blog.date} className='main-blog'>
          <h2>{blog.title}</h2>
          {expandedBlogs.includes(blog.date) ? (
            <div className='content-blog1'>
              <p>{blog.content}</p>
              <button onClick={() => toggleExpand(blog.date)} className='blog-toggle'>Read Less</button>
            </div>
          ) : (
            <div>
              <p className='content-blog2'>{blog.content.substring(0, 100)}...</p>
              <button onClick={() => toggleExpand(blog.date) } className='read-more'>Read More</button>
            </div>
          )}
          <p className='date-of-blog'>Date: {blog.date}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default DailyBlog;
