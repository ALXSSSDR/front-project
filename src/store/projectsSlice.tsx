import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { fetchRepos } from '../services/githubService';
import { Project } from '../types/Project';

export interface ProjectsState {
  items: Project[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ProjectsState = {
  items: [],
  status: 'idle',
  error: null,
};

export const fetchProjectsFromGitHub = createAsyncThunk(
  'projects/fetchFromGitHub',
  async (_, { rejectWithValue }) => {
    try {
      return await fetchRepos();
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    addProject(state, action: PayloadAction<Project>) {
      state.items.push(action.payload);
    },
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjectsFromGitHub.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProjectsFromGitHub.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProjectsFromGitHub.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export const { addProject} = projectsSlice.actions;
export default projectsSlice.reducer;
