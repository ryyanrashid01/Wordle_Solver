import React from "react";

const Letter = function ({ color, letter, deleteLetter }) {
  let letterStyle = "";
  if (color === "black") {
    letterStyle = "black-letter";
  }

  const triggerDelete = function (letter) {
    deleteLetter(letter);
  };

  return (
    <div
      className={`letter ${letterStyle}`}
      onClick={() => triggerDelete(letter)}
    >
      {letter}
      <div className="delete">
        <i className="fa-solid fa-xmark"></i>
      </div>
    </div>
  );
};

export default Letter;
