import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";

import Select from "./Select";
import Form from "../blocks/Form";

Enzyme.configure({ adapter: new Adapter() });

it("InputGroup component exists", () => {
  const wrapper = shallow(<Select />);
  expect(wrapper.exists()).toBe(true);
});

it("InputGroup component renders", () => {
  const wrapper = shallow(<Select />);

  expect(wrapper).toMatchSnapshot();
});

it(`Should contain Select`, () => {
  const props = {
    name: "note",
    list: ["red", "blue", "white"],
    onChange: () => {},
    value: "red"
  };
  const wrapper = shallow(<Select {...props} />);

  expect.assertions(2);
  expect(wrapper.find(Form.Select)).toHaveLength(1);
  expect(wrapper.find("option")).toHaveLength(4);
});
