import React from 'react';
import '../style/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'CineSuggest', 
      subtext: 'Customized Film Recommendations with Interactive UI',
      date: '2023',
      link: 'https://github.com/Kartikeyan8?tab=repositories',
      description: 'Developed a web application that recommends movies based on user preferences and provides a personalized experience with an interactive UI.',
      tags: ['React', 'Streamlit', 'Python']
    },
    {
      title: 'EmoTunes',
      subtext: 'Emotion Recognition Music Player',
      date: '2021',
      link: 'https://github.com/Kartikeyan8?tab=repositories',
      description: 'Raspberry Pi-powered music player using Mobilenetv3 for emotion recognition, delivering personalized playlists based on the user\'s emotional state.',
      tags: ['Python', 'Raspberry Pi', 'Tensorflow']
    },
    {
      title: 'Friends Data Analysis  ',
      subtext: 'In-depth analysis of Friends TV show.',
      date: '2021',
      link: 'https://github.com/Kartikeyan8?tab=repositories',
      description: 'Performed a comprehensive analysis of the Friends TV show using Python, including character analysis, dialog analysis, and scene analysis.',
      tags: ['Python', 'Pandas', 'Matplotlib']
    },
    {
      title: 'This Portfolio Website',
      subtext: 'A visually captivating portfolio website',
      date: '2023',
      link: 'https://github.com/Kartikeyan8?tab=repositories',
      description: 'Developed a visually captivating portfolio website utilizing React, CSS, and cutting-edge formatting techniques. Showcasing a collection of creative projects and articles.',
      tags: ['React', 'CSS', 'Javascript']
    },
    {
      title: 'Crypto Coins Search App',
      subtext: 'A React-based search app for cryptocurrencies',
      date: '2022',
      link: 'https://github.com/Kartikeyan8?tab=repositories',
      description: "Developed and designed a React-based search app using the CoinGecko API, enabling users to explore and track crypto coins efficiently. Seamlessly navigate the world of cryptocurrencies with this intuitive application.",
      tags: ['React', 'CSS', 'Javascript']
    }
  ];

  return (
    <section className="container" id="projects">
      {projects.map((project, index) => {
        return (
          <div className="project-card" key={index}>
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-subtext">{project.subtext}</p>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="tag">{tag}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.link}>
                  Github Link &#8599;
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Projects;
