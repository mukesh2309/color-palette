import React from "react";
import "./Card.css";
import Color from "./Color";
function card(props) {
  return (
    <div className="card">
      <h2>{props.color}</h2>
      <div className="card-colors">
        {props.colorName.map((item, i) => {
          return <Color key={i} cName={item} cCode={props.colorCode[i]} />;
        })}
      </div>
    </div>
  );
}

export default card;
