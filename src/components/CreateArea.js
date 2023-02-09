import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [isExp, setExp] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const submitNote = (event) => {
    props.onAddNote(note);

    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  };

  const submitViaEnter = (e) => {
    props.onAddNoteEnter(e, note);
    if (e.key === "Enter") {
      setNote({
        title: "",
        content: "",
      });
      e.preventDefault();
    }
  };

  const expand = () => {
    setExp(true);
  };
  return (
    <div>
      <form className="create-note">
        <input
          onClick={expand}
          onChange={handleChange}
          name="title"
          placeholder="Title Here"
          value={note.title}
          onKeyDown={submitViaEnter}
        />

        {isExp && (
          <textarea
            onChange={handleChange}
            name="content"
            placeholder="Write a note here..."
            rows={3}
            value={note.content}
            onKeyDown={submitViaEnter}
          />
        )}

        <Zoom in={isExp}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
