import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../style/Blogcard.css';
import { blogs } from './Blogs_data';
const BlogCard = () => {


  const settings = {
    
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    easing: 'easeOutElastic',
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
  };

  return (
    <div className="latest">
      <div className="blog">
        <Slider {...settings}>
          {blogs.map((blog, index) => (
            <div key={index}>
              <a href={blog.link} >
              <img src={blog.image} alt="Blog Background" className="blog-image" />
              </a>
              <div className="blog-title">{blog.title}</div>
              <div className="blog-date">{blog.date}</div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BlogCard;
