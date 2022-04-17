import React from "react";
import "./App.css";
import Card from "./component/Card";
import Data from "./component/Data";
import Info from "./component/Info";
import Personal from "./component/Personal";

function App() {
  return (
    <div className="container">
      <Personal />
      <Info />
      {Object.entries(Data.colors).map((item, i) => {
        return (
          <Card
            color={item[0]}
            key={i}
            colorName={item[1].colorName}
            colorCode={item[1].colorCode}
          />
        );
      })}
    </div>
  );
}

export default App;
