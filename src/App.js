import React, { Component, Fragment } from "react";

import Section from "./elements/Section";
import Entry from "./compositions/Entry";
import Cards from "./compositions/Cards";
import { deleteFromArrays, getNewNote, onUpdatedNotes } from "./helpers";

const initialState = {
  date: "",
  key: "",
  note: "",
  notes: [],
  color: "",
  number: "",
  edit: false
};

class App extends Component {
  state = {
    ...initialState
  };

  //save input values to state
  onHandleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  //saves a note to the list of notes
  onSave = () => {
    const { edit, note, color } = this.state;
    if (!note) {
      alert("note cannot be empty");
    } else if (!color) {
      alert("please choose a color");
    } else if (edit) {
      const newNotes = onUpdatedNotes(this.state);
      this.setState({
        ...initialState,
        notes: [...newNotes]
      });
    } else {
      const note = getNewNote(this.state);

      this.setState(({ notes }) => ({
        ...initialState,
        notes: [note, ...notes]
      }));
    }
  };

  //Edits a note
  onEdit = key => {
    const { notes } = this.state;
    const note = notes[key];

    this.setState({
      key,
      edit: true,
      note: note.note,
      date: note.date,
      color: note.color,
      number: note.number
    });
  };

  //Deletes a note from list of notes
  onDelete = key => {
    const { notes } = this.state;
    const formattedNotes = deleteFromArrays(notes, key);
    this.setState({ notes: formattedNotes });
  };

  render() {
    const { notes, note, color } = this.state;

    return (
      <Fragment>
        <Section>
          <Entry
            note={note}
            color={color}
            onSave={this.onSave}
            onHandleChange={this.onHandleChange}
          />
        </Section>
        <Section>
          <Cards notes={notes} onEdit={this.onEdit} onDelete={this.onDelete} />
        </Section>
      </Fragment>
    );
  }
}

export default App;
