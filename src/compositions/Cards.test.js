import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";

import Cards from "./Cards";
import Card from "../components/Card";
import Container from "../blocks/Container";

Enzyme.configure({ adapter: new Adapter() });

it("Cards component exists", () => {
  const wrapper = shallow(<Cards />);
  expect(wrapper.exists()).toBe(true);
});

it("Cards component renders", () => {
  const wrapper = shallow(<Cards />);

  expect(wrapper).toMatchSnapshot();
});

it(`Cards should contain "Container" and "Card"`, () => {
  const mockCallBack = jest.fn();
  const props = {
    notes: [
      {
        color: "blue",
        date: "March 31, 8:54 pm",
        note: "Hey",
        number: 1
      }
    ],
    onEdit: mockCallBack,
    onDelete: mockCallBack
  };
  //   expect.assertions(4);
  const wrapper = shallow(<Cards {...props} />);
  expect(wrapper.find(Card)).toHaveLength(1);
  expect(wrapper.find(Container)).toHaveLength(1);
  //   console.log({ btn: wrapper.props() });

  //   expect(mockCallBack.mock.calls.length).toEqual(1);
  expect(wrapper.find(Container).props().wrap).toBe("true");
});
