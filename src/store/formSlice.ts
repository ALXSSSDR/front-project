import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormState {
  title: string;
  description: string;
  technologies: string;
  link: string;
}

const initialState: FormState = {
  title: '',
  description: '',
  technologies: '',
  link: '',
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormTitle(state, action: PayloadAction<string>) {
      state.title = action.payload;
    },
    setFormDescription(state, action: PayloadAction<string>) {
      state.description = action.payload;
    },
    setFormTechnologies(state, action: PayloadAction<string>) {
      state.technologies = action.payload;
    },
    setFormLink(state, action: PayloadAction<string>) {
      state.link = action.payload;
    },
    resetForm(state) {
      state.title = '';
      state.description = '';
      state.technologies = '';
      state.link = '';
    },
  },
});

export const { setFormTitle, setFormDescription, setFormTechnologies, setFormLink, resetForm } = formSlice.actions;
export default formSlice.reducer;