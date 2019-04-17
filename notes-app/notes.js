const fs = require("fs");
const chalk = require("chalk");

function getNotes() {
  return "Your notes...";
}

const removeNote = title => {
  const notes = loadNotes();
  const notesToKeep = notes.filter(note => note.title !== title);
  saveNotes(notesToKeep);
  notesToKeep.length < notes.length
    ? console.log(chalk.bgGreen("Note removed"))
    : console.log(chalk.bgRed("No note found"));
};

const addNote = function(title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(note => {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
    console.log("Note added");
  } else {
    console.log("Note title taken");
  }
};

const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
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

module.exports = { getNotes, addNote, removeNote };
