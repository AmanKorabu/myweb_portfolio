import React from 'react';


function Education() {
  const educationData = [
    {
      degree: 'Higher Secondary Education (HSC)',
      institution: 'New Model Junior College, Kolhapur',
      year: '2018 - 2020',
      description: 'Completed studies in science stream with focus on computer science and mathematics.'
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Shri.Chattrapati Shivaji University, Kolhapur',
      year: '2020 - 2023',
      description: 'Specialized in web development and data structures. Built several frontend projects using React and JavaScript.'
    },
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Dr. D.Y. Patil Agricultural and Technical University, Kolhapur',
      year: '2024 - 2026',
      description: 'Currently pursuing MCA with a focus on advanced web technologies and software development practices. Engaged in various projects that enhance my skills in React, Node.js, and database management.'
    }
    
  ];

  return (
    <section className="education-section" id="education">
      <h2>Education</h2>
      <div className="education-container">
        {educationData.map((item, index) => (
          <div className="education-card" key={index}>
            <h3>{item.degree}</h3>
            <p className="institution">{item.institution}</p>
            <p className="year">{item.year}</p>
            <p className="description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
