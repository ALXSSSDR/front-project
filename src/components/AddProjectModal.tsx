import React, { useState } from 'react';
import { AppDispatch } from '../store';
import { addProject } from '../store/projectsSlice';
import { v4 as uuidv4 } from 'uuid';

interface AddProjectModalProps {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  password: string;
  dispatch: AppDispatch;
}

export const AddProjectModal: React.FC<AddProjectModalProps> = ({ showModal, setShowModal, password, dispatch }) => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [technologies, setTechnologies] = useState<string>('');
  const [link, setLink] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newProject = {
      id: uuidv4(),
      title,
      description,
      technologies: technologies.split(',').map((tech: string) => tech.trim()), 
      link,
    };

    dispatch(addProject(newProject));

    setTitle('');
    setDescription('');
    setTechnologies('');
    setLink('');
    setShowModal(false);
  };

  return (
    <>
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
    </>
  );
};
