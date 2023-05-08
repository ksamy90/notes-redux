import { createSlice } from "@reduxjs/toolkit";
import noteService from "../services/notes";

const initialState = [];

const noteSlice = createSlice({
  name: "notes",
  initialState,
  // dispatch({ type: 'notes/createNote', payload: 'Redux Toolkit is awesome!' })
  reducers: {
    createNote(state, action) {
      console.log(state);
      state.push(action.payload);
    },
    toggleImportanceOf(state, action) {
      const id = action.payload;
      const noteToChange = state.find((n) => n.id === id);
      const changedNote = {
        ...noteToChange,
        important: !noteToChange.important,
      };
      return state.map((note) => (note.id !== id ? note : changedNote));
    },
    appendNote(state, action) {
      state.push(action.payload);
    },
    setNotes(_state, action) {
      return action.payload;
    },
  },
});

export const { toggleImportanceOf, appendNote, setNotes } = noteSlice.actions;

export const initializeNotes = () => {
  return async (dispatch) => {
    const notes = await noteService.getAll();
    dispatch(setNotes(notes));
  };
};

export const createNote = (content) => {
  return async (dispatch) => {
    const note = await noteService.createNew(content);
    dispatch(appendNote(note));
  };
};

export default noteSlice.reducer;
