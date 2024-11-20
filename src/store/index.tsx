import { configureStore } from '@reduxjs/toolkit';
import projectsReducer, { ProjectsState } from './projectsSlice';
import { projects as initialProjects } from '../data/projects';

const loadStateFromLocalStorage = (): ProjectsState => {
  try {
    const serializedState = localStorage.getItem('projects');
    return serializedState
      ? { items: JSON.parse(serializedState), status: 'idle', error: null }
      : { items: initialProjects, status: 'idle', error: null };
  } catch (error) {
    console.error('Ошибка загрузки состояния из localStorage:', error);
    return { items: initialProjects, status: 'idle', error: null };
  }
};

const preloadedState = {
  projects: loadStateFromLocalStorage(),
};

export const store = configureStore({
  reducer: {
    projects: projectsReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  try {
    const serializedState = JSON.stringify(store.getState().projects.items);
    localStorage.setItem('projects', serializedState);
  } catch (error) {
    console.error('Ошибка сохранения состояния в localStorage:', error);
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
