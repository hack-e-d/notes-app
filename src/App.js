import { useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList"

const App = () => {
  const [notes, setNotes] = useState([{
    id: nanoid(),
    text: "This is the first note",
    date: "15/2/21"
  },
  {
    id: nanoid(),
    text: "This is the second note",
    date: "15/2/21"
  },
  {
    id: nanoid(),
    text: "This is the third note",
    date: "15/2/21"
  }]);

  const addNote = (text) => {
    // console.log(text);
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    }

    const newNotes = [...notes,newNote];
    setNotes(newNotes);
  };

  return (
    <div className="container">
      <NotesList notes = {notes} handleAddNote={addNote}/>
    </div>
  );
};

export default App;