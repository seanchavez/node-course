const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => "Your notes...";

const listNotes = () => {
  console.log(chalk.blue.underline("Your Notes: "));
  const notes = loadNotes();
  notes.forEach(note => {
    console.log(note);
  });
};

const removeNote = title => {
  const notes = loadNotes();
  const notesToKeep = notes.filter(note => note.title !== title);
  saveNotes(notesToKeep);
  notesToKeep.length < notes.length
    ? console.log(chalk.green.inverse("Note removed"))
    : console.log(chalk.red.inverse("No note found"));
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find(note => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
    console.log(chalk.green.inverse("Note added"));
  } else {
    console.log(chalk.red.inverse("Note title taken"));
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

const readNote = title => {
  const notes = loadNotes();
  const noteToRead = notes.find(note => note.title === title);
  console.log(
    `${chalk.blue.inverse(`${noteToRead.title}:`)} ${noteToRead.body}`
  );
};

module.exports = { getNotes, addNote, removeNote, listNotes, readNote };
