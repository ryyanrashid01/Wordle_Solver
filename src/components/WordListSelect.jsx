import React, { useState } from "react";

const WordListSelect = function () {
  const [check, setCheck] = useState(false);
  function handleChange(event) {
    setCheck(event.target.checked);
  }
  return (
    <div className="word-list-select">
      <input
        onClick={handleChange}
        type="checkbox"
        id="wordListSelect"
        defaultChecked={check}
      />
      <label htmlFor="wordList">Use all 5 letter words.</label>
      <p>
        (Default: <b>Wordle List</b>)
      </p>
      <br />
    </div>
  );
};

export default WordListSelect;
