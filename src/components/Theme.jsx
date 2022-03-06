import React, { useState, useEffect } from "react";

const Theme = function () {
  const time = new Date().getHours();
  const [selectedIcon, setIcon] = useState("moon");
  useEffect(() => {
    if (time > 6 && time < 19) {
      setIcon("moon");
      document.body.classList.remove("dark-theme");
    } else {
      setIcon("sun");
      document.body.classList.add("dark-theme");
    }
  }, []);
  function handleClick() {
    document.body.classList.toggle("dark-theme");
    setIcon((prevIcon) => {
      if (prevIcon === "moon") {
        setIcon("sun");
      } else {
        setIcon("moon");
      }
    });
  }
  return (
    <i
      className={"fa-solid theme-icon fa-" + selectedIcon}
      title="Theme"
      onClick={handleClick}
    ></i>
  );
};

export default Theme;
