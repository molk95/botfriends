import { shallow, mount, render } from "enzyme";
import React from "react";
import FilterBots from "./FilterBots";

it("expect to render Card component", () => {
   
  expect(shallow(<FilterBots />)).toMatchSnapshot();
});
