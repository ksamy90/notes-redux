import NewNote from "./components/NewNote";
import Notes from "./components/Notes";
import VisibilityFilter from "./components/VisibilityFilter";

const App = () => {
  return (
    <div>
      <NewNote />
      <VisibilityFilter />
      <ul>
        <Notes />
      </ul>
    </div>
  );
};

export default App;
