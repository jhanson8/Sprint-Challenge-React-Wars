/* jshint esversion: 6 */
import React from "react";

const CharCard = props => {
  return (
    <div className="char-list">
      <h2>Name: {props.name}</h2>
      <p>Height: {props.height}</p>

        <p>Gender: {props.gender}</p>
        <p>Mass:{props.mass}</p>

    </div>
  );
};
export default CharCard;
