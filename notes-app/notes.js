const fs = require("fs");

function getNotes() {
  return "Your notes...";
}

const addNote = function(title, body) {
  const notes = loadNotes();
  console.log(notes);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

module.exports = { getNotes, addNote };
