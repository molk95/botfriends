import { shallow } from "enzyme";
import React from "react";
import HomePage from "./HomePage";

let wrapper;
beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robotFriends: [],
    searchFiled: "",
    isPending: false,
  };
  wrapper = shallow(<HomePage {...mockProps} />);
});

it("renders HomePage without crashing", () => {
  expect(wrapper).toMatchSnapshot();
});

it("filters robots correctly", () => {
  const mockPropsfilter = {
    onRequestRobots: jest.fn(),
    robotFriends: [
      {
        id: 4,
        name: "jane",
        email: "jane@xyz.io",
      },
    ],
    searchFiled: "jane",
    isPending: false,
  };
  const wrapperFilter = shallow(<HomePage {...mockPropsfilter} />);
  expect(wrapperFilter.instance().filterRobots()).toEqual([
    {
      id: 4,
      name: "jane",
      email: "jane@xyz.io",
    },
  ]);
});
