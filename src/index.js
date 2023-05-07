import React from "react";
import ReactDOM from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import App from "./App";
import noteReducer from "./reducers/noteReducer";
import filterReducer from "./reducers/filterReducer";

const store = configureStore({
  reducer: {
    notes: noteReducer,
    filter: filterReducer,
  },
});
store.subscribe(() => console.log(store.getState()));
// store.dispatch(
//   createNote("combineReducers forms one reducer from many simple reducers")
// );

// noteService.getAll().then((notes) => {
//   notes.forEach((note) => {
//     store.dispatch(appendNote(note));
//   });
// });

// noteService.getAll().then((notes) => {
//   store.dispatch(setNotes(notes));
// });

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
