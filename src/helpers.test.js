import {
  formatAMPM,
  deleteFromArrays,
  getNewNote,
  onUpdatedNotes
} from "./helpers";

test(`formatAMPM returns 8:44 pm when passed new Date("2019-03-31T19:44:57.872Z")`, () => {
  expect(formatAMPM(new Date("2019-03-31T19:44:57.872Z"))).toBe("8:44 pm");
});

test(`deleteFromArrays deletes one item from the array passed as argument`, () => {
  const notes = [
    {
      color: "Red",
      date: "March 31, 8:54 pm",
      note: "Hello world",
      number: 1
    },
    { color: "Brown", date: "March 31, 8:54 pm", note: "sup man", number: 2 }
  ];
  const key = 1;

  const returnedNotes = [
    {
      color: "Red",
      date: "March 31, 8:54 pm",
      note: "Hello world",
      number: 1
    }
  ];

  expect(deleteFromArrays(notes, key)).toEqual(returnedNotes);
  expect(deleteFromArrays(notes, key)).toHaveLength(1);
});

test(`getNewNote returns Object containing the following keys,"note","color","number","date"`, () => {
  const notes = [];
  const color = "Brown";
  const note = "sup man";
  const containObject = {
    color: "Brown",
    note: "sup man",
    number: 1
  };
  const state = { note, color, notes };
  expect(getNewNote(state)).toMatchObject(containObject);
  expect(getNewNote(state)).toHaveProperty("date");
});

test(`onUpdatedNotes returns Array returns containing the object that contains the update`, () => {
  const notes = [
    {
      color: "Red",
      date: "March 31, 8:54 pm",
      note: "Hello world",
      number: 1
    }
  ];
  const state = {
    date: "March 31, 8:54 pm",
    key: 0,
    note: "sup man",
    notes,
    color: "Red",
    number: 1
  };
  const shouldContain = [
    {
      date: "March 31, 8:54 pm",
      note: "sup man",
      color: "Red",
      number: 1
    }
  ];

  expect(onUpdatedNotes(state)).toEqual(expect.arrayContaining(shouldContain));
});
