import React, { useEffect, useRef, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Typed from "typed.js";
import '../style/Home.css';
import BlockCard from './Blogcard';

const translations = {
  'सौभाग्य न सब दिन सोता है': "Luck doesn't sleep all day",
  "Luck doesn't sleep all day": 'सौभाग्य न सब दिन सोता है',
};

const Home = () => {
  const [heading, setHeading] = useState('सौभाग्य न सब दिन सोता है');
  const [isTranslating, setIsTranslating] = useState(false);

  const handleClick = () => {
    if (!isTranslating) {
      setIsTranslating(true);
      setTimeout(() => {
        setHeading((prevHeading) => translations[prevHeading]);
        setIsTranslating(false);
      }, 1000);
    }
  };

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Engineer", "Developer", "Actor", "ML Enthusiast", "Blogger"],
      startDelay: 300,
      typeSpeed: 50,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
      showCursor: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="container" id="about">
      <div className='quote-text'>
        <div className="subtext">
          <h1 className={`heading ${isTranslating ? 'transitioning' : ''}`}>
            {heading}
          </h1>
          <button onClick={handleClick} className='translate-button'>
            Translate
          </button>
        </div>
      </div>
      <div className="max-width">
        <h2 className="title">About Me</h2>
        <div className="about-content">
          <div className="column right">
            <h1 className='latest-title'>MY RECENT ARTICLES</h1>
            <BlockCard />
          </div>
          <div className="column left">
            <div className="text">
              I'm a <span ref={el}></span>
            </div>
            <p className="about-text">
              I always had a fascination with computers but wasn't quite sure in which area I excelled. During the lockdown,
              I explored the vast computer science area and found myself mesmerized by the machine learning world. By day,
              I am an electronics and instrumentation student, and by night, I'm honing my skills as an ML enthusiast.
              When I’m not working on my projects, I’m either reading non-fiction or watching some old anime.
              I love to connect with people from all walks of life, so please don’t hesitate to send me a message.
            </p>
            <div className="connect">
              <a href="https://www.linkedin.com/in/kartikeyan-bhatt-80841020b/">
                <img src="https://img.icons8.com/ios/50/000000/linkedin.png" alt="linkedin" className="connect-img" />
              </a>
              <a href="https://github.com/Kartikeyan8?tab=repositories">
                <img src="https://img.icons8.com/ios/50/000000/github.png" alt="github" className="connect-img" />
              </a>
              <a href="https://twitter.com/kartikey_0812">
                <img src="https://img.icons8.com/ios/50/000000/twitter.png" alt="twitter" className="connect-img" />
              </a>
              <a href="https://www.instagram.com/kartikeyan_bhatt_/">
                <img src="https://img.icons8.com/ios/50/000000/instagram-new.png" alt="instagram" className="connect-img" />
              </a>
              <a href="mailto:kartikeyan8112001@gmail.com">
                <img src="https://img.icons8.com/ios/50/000000/mail.png" alt="mail" className="connect-img" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
