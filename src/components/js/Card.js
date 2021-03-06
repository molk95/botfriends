import React from "react";


 const Card = ({ id, name, email }) => {
  return (
    <div className="tc grow bg-white br3 pa3 ma2 dib bw2 shadow-5">
      <img src={`https://robohash.org/ ${id}`} alt="RandomRobot" />

      <div>
        <div className="contact">
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </div>
    </div>
  );
};
export default Card;