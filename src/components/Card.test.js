import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";

import Card from "./Card";
import BlockCard from "../blocks/Card";

Enzyme.configure({ adapter: new Adapter() });

it("Card component exists", () => {
  const wrapper = shallow(<Card />);
  expect(wrapper.exists()).toBe(true);
});

it("Card component renders", () => {
  const wrapper = shallow(<Card />);

  expect(wrapper).toMatchSnapshot();
});

it(`Should contains Header,Body and Footer`, () => {
  const props = {
    note: "Hey you!",
    color: "Red",
    date: "March 31, 8:54 pm",
    number: 1,
    onEdit: () => {},
    onDelete: () => {}
  };
  expect.assertions(7);
  const wrapper = shallow(<Card {...props} />);
  expect(wrapper.find(".header-title").text()).toBe("Note 1");
  expect(wrapper.find(".header-title")).toHaveLength(1);
  expect(wrapper.find(BlockCard.Button)).toHaveLength(2);
  expect(wrapper.find(BlockCard.Body)).toHaveLength(1);
  expect(wrapper.find(BlockCard.Body).text()).toBe(props.note);
  expect(wrapper.find(BlockCard.Footer)).toHaveLength(1);
  expect(wrapper.find(BlockCard.Footer).text()).toBe(props.date);
});
