import React from "react";
import Card from "./Card";

const WordList = function ({ wordList }) {
  var div_zero = (
    <div style={{ display: "flex", alignItems: "center" }}>
      Filters empty or invalid. ZERO words found.
    </div>
  );
  return (
    <div className="container words">
      <h4>
        {wordList.length == 0 ? div_zero : wordList.length + " words found."}
      </h4>
      <br />
      <div className="word-list">
        {wordList.map((word, index) => {
          return <Card key={index} content={word.toUpperCase()} />;
        })}
      </div>
    </div>
  );
};

export default WordList;
