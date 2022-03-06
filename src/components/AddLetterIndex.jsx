import React, { useState, useRef, useEffect } from "react";

const AddLetterIndex = function ({ addLetter }) {
  const [letterInput, setLetterInput] = useState("");
  const [indexInput, setIndexInput] = useState("");
  const [showAlert, setAlert] = useState(false);

  const inputIndexrRef = useRef(null);

  useEffect(() => {
    if (letterInput.length === 1) {
      inputIndexrRef.current.focus();
    }
  }, [letterInput]);

  const handleChangeLetter = (event) => {
    setLetterInput(event.target.value);
  };

  const handleChangeIndex = (event) => {
    if (event.target.value < 1 || event.target.value > 5) {
      setAlert(true);
      setIndexInput("");
    } else {
      setAlert(false);
      setIndexInput(event.target.value.toString());
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const inputLetter = event.target[0].value.toUpperCase();
    const inputIndex = event.target[1].value;
    const letter = { letter: inputLetter, position: inputIndex };
    if (inputLetter && inputIndex) {
      addLetter(letter);
    }
    setLetterInput("");
    setIndexInput("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={letterInput}
          onChange={handleChangeLetter}
          maxLength="1"
          placeholder="A"
        />
        <input
          type="number"
          id="indexInput"
          value={indexInput}
          onChange={handleChangeIndex}
          maxLength="1"
          placeholder="1"
          ref={inputIndexrRef}
        />
        <button type="submit">
          <i className="fa-solid fa-plus"></i>
        </button>
      </form>
      {showAlert ? "Invalid Index." : ""}
    </div>
  );
};

export default AddLetterIndex;
