import './../styles/Skills.css';
import { useState } from 'react';

export const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const skillsData = [
    { name: 'JavaScript / TypeScript', description: 'Experienced in modern JavaScript frameworks and TypeScript for building scalable applications.' },
    { name: 'React / Redux', description: 'Proficient in developing user interfaces with React and managing application state with Redux.' },
    { name: 'Node.js', description: 'Skilled in building backend services using Node.js and Express.js for RESTful APIs.' },
    { name: 'HTML / CSS', description: 'Well-versed in semantic HTML5 and CSS3, with a focus on responsive design.' },
    { name: 'Git', description: 'Experienced in version control using Git for collaborative development and project management.' },
    { name: 'WordPress', description: 'Knowledgeable in building and customizing WordPress sites, focusing on themes, plugins, and SEO best practices.' },
    { name: 'Django', description: 'Proficient in Django for developing secure and scalable web applications with Python.' },
    { name: 'SQL', description: 'Experienced in working with SQL databases like PostgreSQL and MySQL for data management and querying.' },
    { name: 'Flutter', description: 'Skilled in building cross-platform mobile applications with Flutter and Dart.' },
    { name: '1C', description: 'Experienced in working with 1C to manage enterprise resources and automate business processes.' },
    { name: 'C++', description: 'Proficient in C++ programming, with a focus on system-level development and performance-critical applications.' },
    { name: 'Python', description: 'Experienced in Python for backend development, data analysis, and automation.' },
  ];

  const handleSkillClick = (skillName: string) => {
    const skill = skillsData.find(s => s.name === skillName);
    if (skill) {
      setSelectedSkill(skill.description);
    }
  };

  const closeModal = () => {
    setSelectedSkill(null);
  };

  return (
    <div className="skills">
      <h2>My Skills</h2>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="skills-item"
            onClick={() => handleSkillClick(skill.name)}
          >
            {skill.name}
          </div>
        ))}
      </div>

      {selectedSkill && (
        <div className="skills-modal skills-show">
          <div className="skills-modal-content">
            <p>{selectedSkill}</p>
            <button onClick={closeModal} className="skills-modal-close">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};
