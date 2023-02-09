import React, { useState } from "react";
import CreateArea from "./CreateArea";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";

function App() {

  const [notes, setNotes] = useState([]);
  const addNote = (note) => {
    if (note.title === "" && note.content === "") {
      return;
    }
    setNotes((prev) => {
      return [...prev, note];
    });
  };
  const addNoteEnter = (e, note) => {
    if (e.key === "Enter") {
      addNote(note);
    }
  };
  const removeNote = (id) => {
    setNotes((prev) => {
      return prev.filter((item, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div>
      <Header />
      <CreateArea onAddNote={addNote} onAddNoteEnter={addNoteEnter} />
    </div>
  );
}

export default App;
