import React from "react";
import { colors } from "./constants";
import Form from "../blocks/Form";
import Container from "../blocks/Container";
import InputGroup from "../components/InputGroup";

const App = ({ note, color, onSave, onHandleChange }) => (
  <Container center>
    <InputGroup
      type="text"
      name="note"
      value={note}
      title="Note Text"
      onChange={onHandleChange}
    />
    <InputGroup
      name="color"
      type="select"
      list={colors}
      value={color}
      title="Note Color"
      onChange={onHandleChange}
    />
    <Form.Button onClick={onSave}>ADD NOTE</Form.Button>
  </Container>
);

export default App;
