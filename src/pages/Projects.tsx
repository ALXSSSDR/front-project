import './../styles/Projects.css';
import { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { fetchProjectsFromGitHub } from '../store/projectsSlice';

export const Projects = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items: projects, status, error } = useSelector((state: RootState) => state.projects);

  const [selectedTech, setSelectedTech] = useState<string>('All');

  const uniqueTechnologies = useMemo(() => {
    return Array.from(new Set(projects.flatMap((project) => project.technologies)));
  }, [projects]);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) =>
      selectedTech === 'All' ? true : project.technologies.includes(selectedTech)
    );
  }, [selectedTech, projects]);

  useEffect(() => {
    dispatch(fetchProjectsFromGitHub());
  }, [dispatch]);

  if (status === 'loading') {
    return (
      <div className="spinner-container">
        <div className="spinner"></div>
        <p>Loading projects...</p>
      </div>
    );
  }

  if (status === 'failed') {
    return <p className="error-message">Error: {error}</p>;
  }

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

      <div className="projects-container">
        {filteredProjects.map((project) => (
          <div className="project-card" key={project.id}>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <p className="project-tech">Technologies: {project.technologies.join(', ')}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="github-link">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
