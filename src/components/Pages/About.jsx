import React from 'react';
import Education from '../Education';


function About() {
  return (
    <div>

    <div className="about">
       <div className="skills-head" style={{
         display: 'flex', justifyContent: 'center', gap: '10px', alignItems: 'center',
        }}>
                      <h1>About me</h1>
                      
                  </div>
      <p>
        I am a React.js developer with skills in HTML, CSS, JavaScript, and frontend frameworks.
        I love building beautiful and responsive web applications.
      </p>
      <p>
        My journey in web development started with a passion for creating interactive user interfaces.
        I enjoy solving problems and continuously learning new technologies to enhance my skills.
      </p>
      <p>
        In my free time, I like to contribute to open-source projects and explore new frameworks.
        I believe in the power of collaboration and sharing knowledge with the developer community.       
      </p>
      <p>
        Feel free to connect with me on social media or check out my projects on GitHub.
        I'm always open to new opportunities and collaborations!
      </p>
      <p>
        Thank you for visiting my portfolio!
      </p>
    </div>
    <hr className='hr'/>
      
      <Education/>
                    </div>
  );
}

export default About;
