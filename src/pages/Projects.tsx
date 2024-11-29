import './../styles/Projects.css';
import { useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { AddProjectModal } from '../components/AddProjectModal'; 
import { Project } from '../types/Project';

export const Projects = () => {
  const dispatch = useDispatch<AppDispatch>();
  const projects = useSelector((state: RootState) => state.projects.items);

  const [selectedTech, setSelectedTech] = useState<string>('All');
  const [showModal, setShowModal] = useState(false); 
  const [errorMessage, setErrorMessage] = useState<string>('');  

  const handleShowModal = () => {
    const password = prompt("Please enter the password to add a project:");

    if (password === import.meta.env.VITE_PROJECT_PASSWORD) {
      setShowModal(true);
      setErrorMessage(''); 
    } else {
      setErrorMessage('Incorrect password.'); 
    }
  };

  const uniqueTechnologies = useMemo(() => {
    return Array.from(new Set(projects.flatMap((project: Project) => project.technologies)));
  }, [projects]);

  const filteredProjects = projects.filter((project: Project) =>
    selectedTech === 'All' ? true : project.technologies.includes(selectedTech)
  );

  return (
    <section className="projects">
      <h2 className="projects-title">Projects</h2>

      <div className="tech-filter">
        <button 
          onClick={() => setSelectedTech('All')} 
          className={selectedTech === 'All' ? 'active' : ''}
        >
          All
        </button>
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

      {errorMessage && <div className="error-message">{errorMessage}</div>}

      <div className="projects-container">
        {filteredProjects.map((project: Project) => (
          <div className="project-card" key={project.id}>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="github-link">
              View on GitHub
            </a>
          </div>
        ))}
      </div>

      <button onClick={handleShowModal} className="show-form-button">
        Add New Project
      </button>

      <AddProjectModal 
        showModal={showModal}
        setShowModal={setShowModal}
        password={import.meta.env.VITE_PROJECT_PASSWORD}
        dispatch={dispatch}
      />
    </section>
  );
};
