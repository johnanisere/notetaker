import React from "react";

import Card from "../blocks/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default ({ note, color, date, number, onEdit, onDelete }) => (
  <Card color={color}>
    <Card.Header>
      <Card.Title color={color}>Note {number}</Card.Title>
      <span>
        <Card.Button onClick={onEdit}>
          <FontAwesomeIcon icon="pen" />
        </Card.Button>
        <Card.Button onClick={onDelete}>
          <FontAwesomeIcon icon="trash" />
        </Card.Button>
      </span>
    </Card.Header>
    <Card.Body>{note}</Card.Body>
    <Card.Footer>{date}</Card.Footer>
  </Card>
);
