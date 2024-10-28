import './../styles/Projects.css';

export const Projects = () => {
  const projectsData = [
    {
      title: 'VL.RU Redesign',
      description: 'A complete redesign of the VL.RU website, focusing on modern UI/UX principles, improved accessibility, and optimized performance using modern web development technologies.',
      githubLink: 'https://github.com/fullindescription/VL_rebrand/tree/Back-DEV',
    },
    
    {
      title: 'WorldSkills Russia Frontend',
      description: 'Developed the frontend for the WorldSkills Russia project, focusing on creating a responsive and user-friendly interface using modern web technologies and best practices.',
      githubLink: 'https://github.com/AreHumphrey/WorldSkills/tree/Frontend',
    },
    {
      title: 'Cross-Platform To-Do Application',
      description: 'Built a cross-platform To-Do application using Flutter with a clean architecture approach, focusing on modularity, maintainability, and scalability across Android and iOS.',
      githubLink: 'https://github.com/ALXSSSDR/flutter_application_todo',
    },
    {
      title: 'Weather Application',
      description: 'Developed a weather application using Electron, providing real-time weather updates with a desktop-friendly interface and cross-platform support.',
      githubLink: 'https://github.com/ALXSSSDR/Weather-app',
    },
    {
      title: 'Roguelike Game',
      description: 'Created a Roguelike game focusing on procedural generation, challenging gameplay, and dynamic exploration. The project was developed with a focus on game mechanics and engaging player experience.',
      githubLink: 'https://github.com/ALXSSSDR/Roguelike',
    }, 
    {
      title: 'Complex Number Operations',
      description: 'Implemented a project to perform various mathematical operations on complex numbers, focusing on efficient algorithms and mathematical accuracy.',
      githubLink: 'https://github.com/ALXSSSDR/complex-number',
    }
        
    
    
  ];

  return (
    <section className="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <a
              href={project.githubLink}
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
