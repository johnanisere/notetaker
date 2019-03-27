import { Months } from "./constants";

//returns current time in 12 hour format
export const formatAMPM = date => {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
};

//deletes a note from the list of notes by its key
export const deleteFromArrays = (notes, key) => {
  let allnotes = [...notes];
  allnotes.splice(key, 1);
  return allnotes.map((note, key) => ({
    ...note,
    number: allnotes.length - key
  }));
};

//constructs new note object
export const getNewNote = state => {
  const { note, color, notes } = state;
  const month = Months[new Date().getMonth()];
  const day = new Date().getDate();
  const time = formatAMPM(new Date());
  const date = `${month} ${day}, ${time}`;
  const newNote = {
    note,
    color,
    date,
    number: notes.length + 1
  };
  return newNote;
};

//constructs an updated note object
export const onUpdatedNotes = state => {
  const { date, key, note, notes, color, number } = state;
  const update = {
    date,
    note,
    color,
    number
  };
  let allnotes = [...notes];
  allnotes.splice(key, 1, update);
  return allnotes;
};
