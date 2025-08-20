import React, { useState } from "react";

export default function NoteList({ notes, deleteNote, editNote }) {
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  function startEdit(note) {
    setEditId(note.id);
    setEditText(note.text);
  }

  function submitEdit(id) {
    if(editText.trim()){
      editNote(id, editText);
      setEditId(null);
      setEditText("");
    }
  }

  function cancelEdit() {
    setEditId(null);
    setEditText("");
  }

  return (
    <ul className="note-list">
      {notes.map(note =>
        editId === note.id ? (
          <li key={note.id} className="note-item editing">
            <input
              className="edit-input"
              value={editText}
              onChange={e => setEditText(e.target.value)}
              aria-label="Edit note"
            />
            <button onClick={() => submitEdit(note.id)} className="save-button">Save</button>
            <button onClick={cancelEdit} className="cancel-button">Cancel</button>
          </li>
        ) : (
          <li key={note.id} className="note-item">
            <span className="note-text">{note.text}</span>
            <div className="note-actions">
              <button onClick={() => startEdit(note)} className="edit-button">Edit</button>
              <button onClick={() => deleteNote(note.id)} className="delete-button" aria-label={`Delete note: ${note.text}`}>Delete</button>
            </div>
          </li>
        )
      )}
    </ul>
  );
}
