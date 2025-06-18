import React from 'react';
import { GoProjectSymlink } from "react-icons/go";

function Projects() {
  const projectList = [
    { title: 'Weather App', description: 'Shows weather based on location.' },
    { title: 'Portfolio', description: 'My personal portfolio built with React.' },
    { title: 'Todo App', description: 'A simple todo list with CRUD features.' }
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
      <div className="project-grid">
        {projectList.map((proj, index) => (
          <div className="project-card" key={index}>
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

