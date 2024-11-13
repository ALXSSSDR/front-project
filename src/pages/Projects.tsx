import './../styles/Projects.css';
import { useState } from 'react';
import { projects } from '../data/projects';

export const Projects = () => {
  const [selectedTech, setSelectedTech] = useState<string>('All');

  const filteredProjects = projects.filter((project) =>
    selectedTech === 'All' ? true : project.technologies.includes(selectedTech)
  );

  const uniqueTechnologies = Array.from(
    new Set(projects.flatMap((project) => project.technologies))
  );

  return (
    <section className="projects">
      <h2 className="projects-title">Projects</h2>
      
      <div className="tech-filter">
        <button onClick={() => setSelectedTech('All')} className={selectedTech === 'All' ? 'active' : ''}>All</button>
        {uniqueTechnologies.map((tech) => (
          <button
            key={tech}
            onClick={() => setSelectedTech(tech)}
            className={selectedTech === tech ? 'active' : ''}
          >
            {tech}
          </button>
        ))}
      </div>

      {/* Список проектов */}
      <div className="projects-container">
        {filteredProjects.map((project) => (
          <div className="project-card" key={project.id}>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
