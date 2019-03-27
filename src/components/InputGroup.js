import React from "react";

import Select from "./Select";
import Form from "../blocks/Form";

const Group = ({ title, value, name, onChange, type, list = [] }) => (
  <Form.Label>
    {title}
    <br />
    {type === "select" ? (
      <Select value={value} name={name} onChange={onChange} list={list} />
    ) : (
      <Form.Input value={value} name={name} type={type} onChange={onChange} />
    )}
  </Form.Label>
);

export default Group;
