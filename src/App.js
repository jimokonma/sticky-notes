import Navbar from "./components/Navbar";
import AddNotes from "./components/AddNotes";
import Notes from "./components/Notes";
// import uniqid from "uniqid";
import { useState, useEffect } from "react";

function App() {
  // Hooks
  // show div to add nodes
  const [displayAddNotes, setDisplayAddNotes] = useState(false);
  // Notes title
  const [title, setTitle] = useState("");
  // Notes message
  const [message, setMessage] = useState("");
  // new notes
  const [note, setNote] = useState({
    id: Math.floor(Math.random() * 100),
    title: null,
    message: null,
  });
  // notes store
  const [notes, setNotes] = useState([]);
  // notes edit Id

  // Display Add note panel
  const handleDisplayAddNote = () => {
    setDisplayAddNotes(!displayAddNotes);
  };
  // handle note input
  const handSaveNote = (e) => {
    e.preventDefault();
    if (title !== "" && message !== "") {
      const newId = Math.floor(Math.random() * 100);
      setNote({
        id: newId,
        title,
        message,
      });
      console.log(note);
      setNotes((prevState) => [...prevState, note]);
      setTitle("");
      setMessage("");
      setDisplayAddNotes(!displayAddNotes);
    } else {
      console.log("enter fields");
    }

    console.log(notes);
  };
  // handle on change for notes title
  const handleTitle = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };
  // handle on change for notes message
  const handleMessage = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
  };
  // Handle delete
  const handleDeleteNote = (id) => {
    setNotes(
      notes.filter((item) => {
        return item.id !== id;
      })
    );
  };
  // Handle edit
  const handleEditNote = (selectedNote) => {
    if (!displayAddNotes) {
      setTitle(selectedNote.title);
      setMessage(selectedNote.message);
      setDisplayAddNotes(true);
      setNotes(
        notes.filter((item) => {
          return item.id !== selectedNote.id;
        })
      );
    } else {
      console.log("can't edit while + panel is open");
    }
  };
  // initialize Note to equal notes
  useEffect(() => {
    setNote({
      id: Math.floor(Math.random() * 100),
      title,
      message,
    });
  }, [title, message, notes]);
  return (
    <div className="App">
      <Navbar
        displayNotes={handleDisplayAddNote}
        noteStates={displayAddNotes}
      />

      {displayAddNotes ? (
        <AddNotes
          note={note}
          saveNote={handSaveNote}
          handleTitle={handleTitle}
          handleMessage={handleMessage}
          message={message}
          title={title}
        />
      ) : (
        ""
      )}
      {notes.length > 0 ? (
        <Notes
          notes={notes}
          deleteNote={handleDeleteNote}
          editNote={handleEditNote}
          displayAddNotes={displayAddNotes}
        />
      ) : (
        <ul className="default-smg">
          <li>
            <h3>No notes are available</h3>
          </li>
          <li>
            {" "}
            Click <b>+</b> to add new note
          </li>
          <li>
            {" "}
            Click <b>-</b> to close note pad
          </li>
        </ul>
      )}
    </div>
  );
}

export default App;
