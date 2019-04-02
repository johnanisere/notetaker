import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";

Enzyme.configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("App component exists", () => {
  const parent = shallow(<App />);
  expect(parent.exists()).toBe(true);
});
