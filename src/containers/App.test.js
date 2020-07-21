import { shallow, mount, render } from "enzyme";
import React from "react";
import App from "./App";

it("expect to render Card component", () => {
  
  expect(shallow(<App  />)).toMatchSnapshot();
});
