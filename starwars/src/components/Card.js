/* jshint esversion: 6 */

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";


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
    <h1> Name: {card.name} </h1>
    );
  })}
</div>


  );
}

export default Character;
