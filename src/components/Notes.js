// import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import { toggleImportanceOf } from "../reducers/noteReducer";
import noteService from "../services/notes";

const Note = ({ note, handleClick }) => {
  return (
    <li key={note.id} onClick={handleClick}>
      {note.content} <strong>{note.important ? "important" : ""}</strong>
    </li>
  );
};

const Notes = (props) => {
  // const dispatch = useDispatch();
  const notesToShow = () => {
    if (props.filter === "ALL") {
      return props.notes;
    }
    return props.filter === "IMPORTANT"
      ? props.notes.filter((note) => note.important)
      : props.notes.filter((note) => !note.important);
  };

  return (
    <ul>
      {notesToShow().map((note) => {
        const handleClick = async () => {
          const newNote = await noteService.editNote(note.id);
          // dispatch(toggleImportanceOf(newNote.id));
          props.toggleImportance(newNote.id);
        };
        return <Note key={note.id} note={note} handleClick={handleClick} />;
      })}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
    filter: state.filter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleImportance: (id) => dispatch(toggleImportanceOf(id)),
  };
};

const ConnectedNotes = connect(mapStateToProps, mapDispatchToProps)(Notes);
export default ConnectedNotes;
