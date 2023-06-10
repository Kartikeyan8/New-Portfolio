import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Navbar.css';

const Navbar = () => {

  return (
    <div className='container'>
      <div className='main-title' style={{textAlign: 'center'}}>Kartikeyan Bhatt </div>
      {/* <div className='main-title-2' style={{textAlign: 'center'}}>Engineer | Developer | Actor | ML Enthusiast | Blogger</div> */}
      
      

      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-link">Projects</Link>
          </li>
          <li className="nav-item">
            <Link to="/articles" className="nav-link">Articles </Link>
          </li>
          <li className='nav-item'>
              <Link to="/blogs" className="nav-link">Daily Blog</Link>
    
          </li>
        
        </ul>
      </nav>
     
    </div>
  );
};

export default Navbar;
