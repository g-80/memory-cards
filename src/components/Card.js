import React from "react";

function Card(props) {
  return (
    <div className="card" onClick={props.onClick}>
      <h1 className={`card-text ${props.textColour}`}>{props.text}</h1>
      <div className={`${props.shape}`}></div>
    </div>
  );
}

export default Card;
