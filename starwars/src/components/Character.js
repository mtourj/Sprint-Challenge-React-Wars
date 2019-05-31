import React from "react";
import "./StarWars.css";

const Character = props => {
  return (
    <div className="character">
      <h1>{props.character.name}</h1>
      <div className="body">
        <div className="panel">
          <h3>Height: {props.character.height}cm</h3>
          <h3>Birthyear: {props.character.birth_year}</h3>
        </div>
        <div className="panel">
          <h3>Eye Color: {props.character.eye_color}</h3>
          <h3>Mass: {props.character.mass}</h3>
        </div>
      </div>
    </div>
  );
};

export default Character;
