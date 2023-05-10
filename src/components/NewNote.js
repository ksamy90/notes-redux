import { createNote } from "../reducers/noteReducer";
// import { useDispatch } from "react-redux";
import { connect } from "react-redux";

const NewNote = (props) => {
  // const dispatch = useDispatch();

  const addNote = async (event) => {
    event.preventDefault();
    const content = event.target.note.value;
    event.target.note.value = "";
    // const newNote = await noteService.createNew(content);
    // dispatch(createNote(content));
    props.createNote(content);
  };

  return (
    <form onSubmit={addNote}>
      <input name="note" />
      <button type="submit">add</button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    createNote: (note) => dispatch(createNote(note)),
  };
};

const ConnectedNote = connect(null, mapDispatchToProps)(NewNote);
export default ConnectedNote;
