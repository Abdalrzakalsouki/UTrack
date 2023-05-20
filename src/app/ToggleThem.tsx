"use client";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import styels from "./page.module.scss";
import { useState, useEffect } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";
const ToggleTheme = () => {
  const [toggle, setToggle] = useState<boolean>(true);

  const cutomIcon = {
    checked: <BsFillMoonStarsFill />,
    unchecked: <FaSun />,
  };

  useEffect(() => {
    const root = document.documentElement;
    const p = document.querySelectorAll("p");
    root.style.setProperty("--bg-color", toggle ? "#070707" : "#ffffff");
    root.style.setProperty("--text-color", toggle ? "#ffffff" : "#000000");
    p.forEach((element) => {
      element.className.replace("light", "dark");
    });
  }, [toggle]);

  return (
    <div>
      <Toggle
        checked={toggle}
        onChange={() => setToggle(!toggle)}
        icons={cutomIcon}
        className={styels.toggle}
      />
    </div>
  );
};

export default ToggleTheme;
