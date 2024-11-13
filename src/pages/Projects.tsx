import './../styles/Projects.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { addProject } from '../store/projectsSlice';

export const Projects = () => {
  const dispatch = useDispatch<AppDispatch>();
  const projects = useSelector((state: RootState) => state.projects.items);
  const [selectedTech, setSelectedTech] = useState<string>('All');
  const [showModal, setShowModal] = useState(false); 

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [technologies, setTechnologies] = useState('');
  const [link, setLink] = useState('');

  const handleShowModal = () => {
    const password = prompt("Please enter the password to add a project:");
    if (password === '12345') { 
      setShowModal(true);
    } else {
      alert("Incorrect password.");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newProject = {
      id: projects.length + 1,
      title,
      description,
      technologies: technologies.split(',').map((tech) => tech.trim()),
      link,
    };

    dispatch(addProject(newProject));

    setTitle('');
    setDescription('');
    setTechnologies('');
    setLink('');
    setShowModal(false);
  };

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
        <button onClick={() => setSelectedTech('All')} className={selectedTech === 'All' ? 'active' : ''}>
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
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="github-link">
              View on GitHub
            </a>
          </div>
        ))}
      </div>

      <button onClick={handleShowModal} className="show-form-button">
        Add New Project
      </button>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Add New Project</h3>
            <form onSubmit={handleSubmit} className="add-project-form">
              <label>
                Title:
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </label>

              <label>
                Description:
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </label>

              <label>
                Technologies (comma separated):
                <input
                  type="text"
                  value={technologies}
                  onChange={(e) => setTechnologies(e.target.value)}
                  required
                />
              </label>

              <label>
                GitHub Link:
                <input
                  type="url"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                  required
                />
              </label>

              <button type="submit" className="submit-button">Add Project</button>
              <button type="button" onClick={() => setShowModal(false)} className="cancel-button">Cancel</button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
