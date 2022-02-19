import React, { useState } from "react";
import BlackLetters from "./BlackLetters";
import YellowLetters from "./YellowLetters";
import GreenLetters from "./GreenLetters";
import WordListSelect from "./WordListSelect";
import wordleList from "./WordleList";
import allWords from "./AllWords";

const Filter = function ({ updateWordList }) {
  const [blackLetters, setBlackLetters] = useState([]);
  const [yellowLetters, setYellowLetters] = useState([]);
  const [greenLetters, setGreenLetters] = useState([]);

  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  function addBlackLetter(newLetter) {
    if (
      blackLetters.indexOf(newLetter) === -1 &&
      alphabet.includes(newLetter)
    ) {
      setBlackLetters((prevLetters) => {
        return [...prevLetters, newLetter];
      });
    }
  }

  function deleteBlackLetter(letter) {
    var updatedList = blackLetters.filter((listLetter) => {
      return listLetter !== letter;
    });
    setBlackLetters(updatedList);
  }

  function addYellowLetter(newLetter) {
    if (
      yellowLetters
        .map((letter) => {
          return letter.letter + letter.position.toString();
        })
        .indexOf(newLetter.letter + newLetter.position.toString()) === -1 &&
      alphabet.includes(newLetter.letter)
    ) {
      setYellowLetters((prevLetters) => {
        return [...prevLetters, newLetter];
      });
    }
  }

  function deleteYellowLetter(letter) {
    var updatedList = yellowLetters.filter((listLetter) => {
      return listLetter !== letter;
    });
    setYellowLetters(updatedList);
  }

  function addGreenLetter(newLetter) {
    if (
      greenLetters
        .map((letter) => {
          return letter.letter + letter.position.toString();
        })
        .indexOf(newLetter.letter + newLetter.position.toString()) === -1 &&
      alphabet.includes(newLetter.letter)
    ) {
      setGreenLetters((prevLetters) => {
        return [...prevLetters, newLetter];
      });
    }
  }

  function deleteGreenLetter(letter) {
    var updatedList = greenLetters.filter((listLetter) => {
      if (
        listLetter.letter === letter.letter &&
        listLetter.position === letter.position
      ) {
        return false;
      } else {
        return true;
      }
    });
    setGreenLetters(updatedList);
  }

  function filterWords() {
    let isChecked = document.getElementById("wordListSelect").checked;
    var modifiedList =
      isChecked === true ? allWords.slice() : wordleList.slice();
    // Filter according black letters
    for (var i = 0; i < modifiedList.length; i++) {
      for (var j = 0; j < blackLetters.length; j++) {
        if (modifiedList[i].includes(blackLetters[j].toLowerCase())) {
          modifiedList.splice(i, 1);
          i -= 1;
          break;
        }
      }
    }
    // Filter according to green letters
    for (let i = 0; i < modifiedList.length; i++) {
      for (var j = 0; j < greenLetters.length; j++) {
        console.log(
          modifiedList[i].includes(greenLetters[j].letter.toLowerCase())
        );
        if (modifiedList[i].includes(greenLetters[j].letter.toLowerCase())) {
          if (
            modifiedList[i][greenLetters[j].position - 1] !==
            greenLetters[j].letter.toLowerCase()
          ) {
            modifiedList.splice(i, 1);
            i -= 1;
            break;
          }
        } else {
          modifiedList.splice(i, 1);
          i -= 1;
          break;
        }
      }
    }
    // Filter according to yellow letters
    for (let i = 0; i < modifiedList.length; i++) {
      for (var j = 0; j < yellowLetters.length; j++) {
        if (modifiedList[i].includes(yellowLetters[j].letter.toLowerCase())) {
          if (
            modifiedList[i][yellowLetters[j].position - 1] ===
            yellowLetters[j].letter.toLowerCase()
          ) {
            modifiedList.splice(i, 1);
            i -= 1;
            break;
          }
        } else {
          modifiedList.splice(i, 1);
          i -= 1;
          break;
        }
      }
    }
    updateWordList(modifiedList);
  }

  return (
    <div className="filter container">
      <BlackLetters
        addLetter={addBlackLetter}
        deleteLetter={deleteBlackLetter}
        blackLetters={blackLetters}
      />
      <YellowLetters
        addLetter={addYellowLetter}
        deleteLetter={deleteYellowLetter}
        yellowLetters={yellowLetters}
      />
      <GreenLetters
        addLetter={addGreenLetter}
        deleteLetter={deleteGreenLetter}
        greenLetters={greenLetters}
      />
      <WordListSelect />
      <button onClick={filterWords}>Find</button>
    </div>
  );
};

export default Filter;
