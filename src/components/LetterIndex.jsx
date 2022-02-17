import React from "react";

const Letter = function ({ color, letter, deleteLetter }) {
  let letterStyle = "";
  if (color === "black") {
    letterStyle = "black-letter";
  } else if (color === "yellow") {
    letterStyle = "yellow-letter";
  } else {
    letterStyle = "green-letter";
  }

  const triggerDelete = function (letter) {
    deleteLetter(letter);
  };

  return (
    <div
      className={`letter-index ${letterStyle}`}
      onClick={() => triggerDelete(letter)}
    >
      {letter.letter} | {letter.position}
      <div className="delete">
        <i className="fa-solid fa-xmark"></i>
      </div>
    </div>
  );
};

export default Letter;
