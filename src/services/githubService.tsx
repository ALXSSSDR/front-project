import axios from 'axios';
import { Project } from '../types/Project';

const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export const fetchRepos = async (): Promise<Project[]> => {
  try {
    const response = await axios.get(`https://api.github.com/users/ALXSSSDR/repos`, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
    });

    return response.data.map((repo: any) => ({
      id: repo.id,
      title: repo.name,
      description: repo.description || 'Нет описания',
      technologies: repo.language ? [repo.language] : [],
      link: repo.html_url,
    }));
  } catch (error: any) {
    console.error('Ошибка при загрузке репозиториев:', error.message);
    throw new Error('Не удалось загрузить данные.');
  }
};
