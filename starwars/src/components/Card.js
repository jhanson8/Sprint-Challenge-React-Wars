/* jshint esversion: 6 */

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import CharCard from "./CharCard";


function Character(){
  const [card, setCard] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people")
      .then(response =>{
        console.log(response.data.results);
        const card = response.data.results;
        setCard(card);


      });
  }, []);
  return(
    <div className="cardComponent">
    {card.map(card => {
    return (
<CharCard
name = {card.name}
height ={card.height}
gender = {card.gender}
mass= {card.mass}
/>


    );
  })}
</div>


  );
}

export default Character;
