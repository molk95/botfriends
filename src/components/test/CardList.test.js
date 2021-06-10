import { shallow, mount, render } from "enzyme";
import React from "react";
import CardList from "./CardList";

it("expect to render Card component", () => {
    const mockRobots = [
        {
            id:1,
            name:'johon Snow',
            username:'Johon95',
            email:'john@gmail.com'
        }
    ]
  expect(shallow(<CardList robotFriends={mockRobots} />)).toMatchSnapshot();
});
