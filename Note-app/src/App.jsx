import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  // Load notes from localStorage on first render
  useEffect(() => {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  // Save notes to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (input.trim() === "") return;

    if (editIndex !== null) {
      // update existing note
      const updatedNotes = [...notes];
      updatedNotes[editIndex] = input;
      setNotes(updatedNotes);
      setEditIndex(null);
    } else {
      // add new note
      setNotes([...notes, input]);
    }

    setInput("");
  };

  const editNote = (index) => {
    setInput(notes[index]);
    setEditIndex(index);
  };

  const deleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  return (
    <div className="app">
      <h1>Notes App</h1>
      <div className="note-input">
        <input
          type="text"
          placeholder="Write your note..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addNote}>{editIndex !== null ? "Update" : "Add"}</button>
      </div>

      {notes.length === 0 && <p className="empty">No notes yet...</p>}

      <div className="notes-board">
        {notes.map((note, index) => (
          <div className="note-card" key={index}>
            <p>{note}</p>
            <div className="note-actions">
              <button className="edit-btn" onClick={() => editNote(index)}>✏️ Edit</button>
              <button className="delete-btn" onClick={() => deleteNote(index)}>❌ Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
