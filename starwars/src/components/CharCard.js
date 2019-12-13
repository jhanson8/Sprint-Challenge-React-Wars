/* jshint esversion: 6 */
import React from "react";
import { MyHTwo, MyP, MyDiv} from "./styles.js";

const CharCard = props => {
  return (
    <divStyle className="char-list">
      <MyHTwo>Name: {props.name}</MyHTwo>
      <MyDiv>
      <MyP>Height: {props.height}</MyP>


        <MyP>Gender: {props.gender}</MyP>
        <MyP>Mass:{props.mass}</MyP>
        </MyDiv>

    </divStyle>
  );
};
export default CharCard;
