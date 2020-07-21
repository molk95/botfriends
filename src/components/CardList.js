import React from "react";
import { Card } from "./Card";


 const CardList = ({ robotFriends }) => {
  return (
    <div>
      {robotFriends.map((user, i) => {
        return (
          <Card
            key={i}
            id={robotFriends[i].id}
            name={robotFriends[i].name}
            email={robotFriends[i].email}
          />
        );
      })}
    </div>
  );
};
export default CardList;