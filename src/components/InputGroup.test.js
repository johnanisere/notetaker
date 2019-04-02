import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";

import InputGroup from "./InputGroup";
import BlockForm from "../blocks/Form";
import Select from "./Select";

Enzyme.configure({ adapter: new Adapter() });

it("InputGroup component exists", () => {
  const wrapper = shallow(<InputGroup />);
  expect(wrapper.exists()).toBe(true);
});

it("InputGroup component renders", () => {
  const wrapper = shallow(<InputGroup />);

  expect(wrapper).toMatchSnapshot();
});

it(`Should contain Input`, () => {
  const props = {
    title: "Note Text",
    value: "Hey",
    name: "note",
    type: "text",
    onChange: () => {}
  };
  expect.assertions(3);
  const wrapper = shallow(<InputGroup {...props} />);
  expect(wrapper.text()).toBe(props.title);
  expect(wrapper.find(BlockForm.Input)).toHaveLength(1);
  expect(wrapper.find(BlockForm.Input).props().value).toEqual(props.value);
});

it(`Should contain Select`, () => {
  const props = {
    title: "Note Text",
    value: "Hey",
    name: "note",
    type: "select",
    list: ["red", "blue", "white"],
    onChange: () => {}
  };
  expect.assertions(1);
  const wrapper = shallow(<InputGroup {...props} />);

  expect(wrapper.find(Select)).toHaveLength(1);
});
