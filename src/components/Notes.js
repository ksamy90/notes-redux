import { useDispatch, useSelector } from "react-redux";
import { toggleImportanceOf } from "../reducers/noteReducer";
import noteService from "../services/notes";

const Note = ({ note, handleClick }) => {
  return (
    <li key={note.id} onClick={handleClick}>
      {note.content} <strong>{note.important ? "important" : ""}</strong>
    </li>
  );
};

const Notes = () => {
  const dispatch = useDispatch();
  const notes = useSelector(({ filter, notes }) => {
    if (filter === "ALL") {
      return notes;
    }
    return filter === "IMPORTANT"
      ? notes.filter((note) => note.important)
      : notes.filter((note) => !note.important);
  });

  return (
    <ul>
      {notes.map((note) => {
        const handleClick = async () => {
          const newNote = await noteService.editNote(note.id);
          dispatch(toggleImportanceOf(newNote.id));
        };
        return <Note key={note.id} note={note} handleClick={handleClick} />;
      })}
    </ul>
  );
};

export default Notes;
