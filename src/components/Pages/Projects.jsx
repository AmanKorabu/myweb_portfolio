import React from 'react';
import { GoProjectSymlink } from "react-icons/go";
import mass from '../images/certificates/mass.png'
import con from '../images/certificates/contry.jpg'
import por from '../images/certificates/portfolio.png'

import { NavLink } from 'react-router-dom';
function Projects() {
  const projectList = [
    {
      title: 'Mass Coating Powder Coating & Coloring',
      description: "MASS COATING is a partnership firm formed since 15th Feb 2016 .The company's registered office is at Bhosari,Pune.",
      image: mass,
      url: "https://bca-final-project-2.onrender.com "
    },
    {
      title: 'Country Data',
      description: 'All country data in the world with some Information related to country',
      image: con,
      url: "https://countrydataweb.netlify.app"
    },
    {
      title: 'My Portfolio',
      description: 'My portfolio which showcase my skills and my self..',
      image: por,
      url: "https://heycmyportfolio.netlify.app/"
    }
  ];


  return (
    <div className="projects">
      <div className="skills-head" style={{
        display: 'flex', justifyContent: 'center', gap: '10px', alignItems: 'center',
      }}>
        <h1>Projects</h1>
        <i><GoProjectSymlink size={50} color='rgb(82, 101, 179)' /></i><br />
        <br />
        <br />

      </div>
      <div className='prs' >
        {projectList.map((proj, index) => (
          <NavLink to={proj.url} target="_blank">
            <div
              className="book"
              key={index}>
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <button type="button" class="btn3">
                <strong>Click to Visit</strong>
                <div id="container-stars">
                  <div id="stars"></div>
                </div>

                <div id="glow">
                  <div class="circle"></div>
                  <div class="circle"></div>
                </div>
              </button>
              <div className="cover" style={{
                backgroundImage: `url(${proj.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                // color: 'white',
              }} >
              </div>
            </div>
          </NavLink>
        ))}

      </div>
    </div>
  );
}

export default Projects;

