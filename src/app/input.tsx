"use client";
import { useState } from "react";
import styles from "./page.module.scss";

const Input = () => {
  const [placeholder, setPlaceHolder] = useState("IP address...");
  return (
    <div className={styles.inputs}>
      <input
        type="text"
        placeholder={placeholder}
        onFocus={() => setPlaceHolder("")}
      ></input>
      <button>Search</button>
    </div>
  );
};

export default Input;
