import React, { useState } from "react";
import Filter from "./Filter";
import WordList from "./WordList";
import Nav from "./Nav";
import "./style.css";

const App = function () {
  const [wordList, setWordList] = useState([]);
  return (
    <div>
      <Nav />
      <div>
        <Filter updateWordList={setWordList} />
        <WordList wordList={wordList} />
      </div>
    </div>
  );
};

export default App;
