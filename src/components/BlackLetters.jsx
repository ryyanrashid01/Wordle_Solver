import React, { useState } from "react";
import Letter from "./Letter";
import AddLetter from "./AddLetter";

const BlackWords = function ({ addLetter, deleteLetter, blackLetters }) {
  return (
    <div className="input-section black-section">
      <h4 style={{ marginTop: "0" }}>Black Letters</h4>
      <div className="black-letter-list">
        {blackLetters.map((letter, index) => {
          return (
            <Letter
              key={index}
              color="black"
              letter={letter}
              deleteLetter={deleteLetter}
            />
          );
        })}
      </div>
      <br />
      <AddLetter addLetter={addLetter} />
    </div>
  );
};

export default BlackWords;
