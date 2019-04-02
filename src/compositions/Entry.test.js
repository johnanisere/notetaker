import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Entry from "./Entry";
import Form from "../blocks/Form";
import Container from "../blocks/Container";
import InputGroup from "../components/InputGroup";

Enzyme.configure({ adapter: new Adapter() });

it("Entry component exists", () => {
  const wrapper = shallow(<Entry />);
  expect(wrapper.exists()).toBe(true);
});

it("Entry component renders", () => {
  const wrapper = shallow(<Entry />);

  expect(wrapper).toMatchSnapshot();
});

it(`Cards should contain "Container","InputGroup" and "Button"`, () => {
  const mockCallBack = jest.fn();
  const props = {
    note: "Hey",
    color: "Red",
    onSave: mockCallBack,
    onHandleChange: mockCallBack
  };
  expect.assertions(4);
  const wrapper = shallow(<Entry {...props} />);
  expect(wrapper.find(Container)).toHaveLength(1);
  expect(wrapper.find(InputGroup)).toHaveLength(2);
  expect(wrapper.find(Form.Button)).toHaveLength(1);
  wrapper.find(Form.Button).simulate("click");
  expect(mockCallBack.mock.calls.length).toEqual(1);
});
