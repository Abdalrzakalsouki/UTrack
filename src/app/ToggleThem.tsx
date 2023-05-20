"use client";
import Toggle from "react-toggle";
import "react-toggle/style.css";

import { useState, useEffect } from "react";

const ToggleTheme = () => {
  const [toggle, setToggle] = useState<boolean>(true);

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
      <Toggle checked={toggle} onChange={() => setToggle(!toggle)} />
    </div>
  );
};

export default ToggleTheme;
