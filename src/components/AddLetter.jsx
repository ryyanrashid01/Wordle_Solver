import React, { useState, useEffect, useRef } from "react";

const AddLetter = function ({ addLetter }) {
  const [letterInput, setLetterInput] = useState("");
  const inputLetterRef = useRef(null);

  useEffect(() => {
    inputLetterRef.current && inputLetterRef.current.focus();
  }, []);

  const handleChange = (event) => {
    setLetterInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    var inputLetter = event.target[0].value.toUpperCase();
    addLetter(inputLetter);
    setLetterInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={letterInput}
        onChange={handleChange}
        maxLength="1"
        placeholder="A"
        ref={inputLetterRef}
      />
      <button type="submit">
        <i className="fa-solid fa-plus"></i>
      </button>
    </form>
  );
};

export default AddLetter;
