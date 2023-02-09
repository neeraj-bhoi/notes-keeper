import React, { useState } from "react";
import CreateArea from "./CreateArea";
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
      {notes.map((item, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={item.title}
            content={item.content}
            onRemoveNote={removeNote}
          />
        );
      })}
    </div>
  );
}

export default App;
