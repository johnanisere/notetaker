import React from "react";
import Container from "../blocks/Container";
import Card from "../components/Card";

const App = ({ notes, onEdit, onDelete }) => (
  <Container wrap="true">
    {notes.map(({ note, color, date, number }, key) => (
      <Card
        key={key}
        note={note}
        date={date}
        color={color}
        number={number}
        onEdit={() => onEdit(key)}
        onDelete={() => onDelete(key)}
      />
    ))}
  </Container>
);

export default App;
