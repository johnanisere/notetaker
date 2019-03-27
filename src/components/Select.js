import React from "react";
import Form from "../blocks/Form";

const Select = ({ list = [], value, onChange, name }) => (
  <Form.Select onChange={onChange} value={value} name={name}>
    <option value="">Select</option>
    {list.map((value, key) => (
      <option value={value} key={key}>
        {value}
      </option>
    ))}
  </Form.Select>
);

export default Select;
