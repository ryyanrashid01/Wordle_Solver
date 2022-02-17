import React from "react";
import AddLetterIndex from "./AddLetterIndex";
import LetterIndex from "./LetterIndex";

const YellowWords = function ({ addLetter, deleteLetter, yellowLetters }) {
  return (
    <div className="input-section yellow-section">
      <h4>Yellow Words</h4>
      <div className="yellow-letter-list">
        {yellowLetters.map((letter, index) => {
          return (
            <LetterIndex
              key={index}
              color="yellow"
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

export default YellowWords;
