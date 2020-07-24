import { shallow } from "enzyme";
import React from "react";
import CounterButton from "./components/CounterButton";

describe("CounterCount", () => {
  const mockerColor = 'red';
  it("expect to render Counter Button component", () => {
    expect(shallow(<CounterButton color={mockerColor} />)).toMatchSnapshot();
  });
  it("correctly increments the counter", () => {
    const wrapper = shallow(<CounterButton color={mockerColor} />);

    wrapper.find('[id="counter"]').simulate("click");
    expect(wrapper.state()).toEqual({ count: 1 });
    wrapper.find('[id="counter"]').simulate("click");
    expect(wrapper.state()).toEqual({ count: 2 });
    expect(wrapper.props().color).toEqual('red');
  });
});
