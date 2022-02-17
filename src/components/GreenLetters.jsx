import React from "react";
import AddLetterIndex from "./AddLetterIndex";
import LetterIndex from "./LetterIndex";

const GreenWords = function ({ addLetter, deleteLetter, greenLetters }) {
  return (
    <div className="input-section green-section">
      <h4>Green Words</h4>
      <div className="green-letter-list">
        {greenLetters.map((letter, index) => {
          return (
            <LetterIndex
              key={index}
              color="green"
              letter={letter}
              deleteLetter={deleteLetter}
            />
          );
        })}
      </div>
      <br />
      <AddLetterIndex addLetter={addLetter} />
    </div>
  );
};

export default GreenWords;
