import { shallow } from "enzyme";
import React from "react";
import HomePage from "./HomePage";

it("expect to render Card component", () => {
  const mockStore = {
    robotFriends: [],
    searchField: "",
  };
  expect(shallow(<HomePage store={mockStore} />)).toMatchSnapshot();
});

