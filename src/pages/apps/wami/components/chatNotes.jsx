import React, { useState } from 'react';

const ChatNotes = () => {
  const [note, setNote] = useState('');

  const addNote = () => {
    if (note.trim() !== '') {
      setNote('');
    }
  };

  return (
    <div className="sticky-notes shadow rounded p-2 mt-3">
      <textarea
        style={{
            height:'365px',
        }}
        className="form-control mb-2"
        placeholder="Add your notes here..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <button className="btn btn-primary" onClick={addNote}>
        Add Note
      </button>
    </div>
  );
};

export default ChatNotes;
