import React, { useState } from "react";
import "./Color.css";

function Color(props) {
  const [beforeCopy, setBeforeCopy] = useState(" ");
  const copyClicked = () => {
    navigator.clipboard.writeText(props.cCode);
    setBeforeCopy("Copied 🐱‍🏍");
    setTimeout(() => {
      setBeforeCopy("");
    }, 600);
  };
  return (
    <div className="color">
      <div
        className="color-bg"
        style={{ background: props.cCode }}
        onClick={copyClicked}
      >
        <h3>{beforeCopy}</h3>
      </div>
      <h3>{props.cName}</h3>
      <p>{props.cCode}</p>
    </div>
  );
}

export default Color;
