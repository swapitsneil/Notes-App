import React, { useState } from "react";

export default function NoteForm({ addNote }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (text.trim()) {
      addNote(text);
      setText("");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="note-form">
      <input
        className="note-input"
        type="text"
        placeholder="Add a note..."
        value={text}
        onChange={e => setText(e.target.value)}
        aria-label="Note"
      />
      <button className="note-button" type="submit">Add</button>
    </form>
  );
}
