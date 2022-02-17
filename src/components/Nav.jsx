import React from "react";

const Nav = function () {
  setInterval(changeLogo, 10000);

  function changeLogo() {
    const logoLetters = document.querySelectorAll(".logo-letters");
    if (logoLetters[0].innerHTML === "W") {
      const setTo = ["S", "O", "L", "V", "E", "R"];
      for (let i = 0; i < logoLetters.length; i++) {
        setTimeout(() => {
          logoLetters[i].classList.add("animate__flipInX");
          logoLetters[i].classList.add("solver-color");
          changeLogoLetters(logoLetters[i], setTo[i]);
        }, 100 * i);
      }
    } else {
      const setTo = ["W", "O", "R", "D", "L", "E"];
      for (let i = 0; i < logoLetters.length; i++) {
        setTimeout(() => {
          logoLetters[i].classList.add("animate__flipInX");
          logoLetters[i].classList.remove("solver-color");
          changeLogoLetters(logoLetters[i], setTo[i]);
        }, 100 * i);
      }
    }
    for (let i = 0; i < logoLetters.length; i++) {
      logoLetters[i].classList.remove("animate__flipInX");
    }
  }

  function changeLogoLetters(letterBox, newLetter) {
    letterBox.innerHTML = newLetter;
  }

  return (
    <div className="navbar">
      <a className="logo" href="index.html">
        <div id="logoLetterOne" className="logo-letters animate__animated">
          W
        </div>
        <div id="logoLetterTwo" className="logo-letters animate__animated">
          O
        </div>
        <div id="logoLetterThree" className="logo-letters animate__animated">
          R
        </div>
        <div id="logoLetterFour" className="logo-letters animate__animated">
          D
        </div>
        <div id="logoLetterFive" className="logo-letters animate__animated">
          L
        </div>
        <div id="logoLetterSix" className="logo-letters animate__animated">
          E
        </div>
      </a>
      <a
        className="github"
        href="https://github.com/ryyanrashid01/Wordle_Solver"
      >
        <i className="fa-brands fa-github"></i>
        <span className="github-desc">GitHub</span>
      </a>
    </div>
  );
};

export default Nav;
