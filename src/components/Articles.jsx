import React from 'react';
import '../style/BlogGrid.css';
import { blogs } from './Blogs_data';
const BlogGrid = () => {
  

  return (
    <div className="blog-grid">
      
      {blogs.map((blog, index) => (
      
        <div className="blog-item" key={index}>
          <img src={blog.image} alt={blog.title} className="blog-image"  />
          <div className="blog-overlay">
            <div className="blog-details">
            <div className="blog-name">{blog.title}</div>
              <div className="blog-date">{blog.date}</div>
              
              
              
        
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogGrid;
