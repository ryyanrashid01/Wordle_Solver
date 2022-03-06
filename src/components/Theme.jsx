import React, { useState } from "react";

const Theme = function () {
  const time = new Date().getHours();
  let icon = "";
  time > 6 && time < 19 ? (icon = "moon") : (icon = "sun");
  const [selectedIcon, setIcon] = useState(icon);
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
