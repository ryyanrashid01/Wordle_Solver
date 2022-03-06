import React from "react";
import Card from "./Card";

const WordList = function ({ wordList }) {
  var div_zero = (
    <div>
      Filters empty or invalid. ZERO words found.
      <ul className="instructions">
        <li className="instruction">
          Enter the black letters in the first section.
        </li>
        <li className="instruction">
          Enter the yellow letters in the second section along with their
          position.
        </li>
        <li className="instruction">
          Enter the green letters in the third section along with their
          position.
        </li>
        <li className="instruction">
          Click on the letter to delete the entry.
        </li>
        <li className="instruction">
          Select the word list. Default is the list of words that Wordle uses.
          Wordle uses only 2309 five letter words out of 8249. If you wish to
          filter through all the five letter words, please check the box before
          clicking Find.
        </li>
        <li className="instruction">Click Find.</li>
      </ul>
    </div>
  );
  return (
    <div className="container words">
      <h4>
        {wordList.length === 0 ? div_zero : wordList.length + " word(s) found."}
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
