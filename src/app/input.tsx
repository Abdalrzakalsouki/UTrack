"use client";
import { useState } from "react";
import styles from "./page.module.scss";

const Input = () => {
  const [placeholder, setPlaceHolder] = useState("IP address...");
  const [IP, setIP] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch("/fetch", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ IP }),
      if(!response.ok) throw new Error('Could not fetch from client to server');
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className={styles.inputs}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={placeholder}
          onFocus={() => setPlaceHolder("")}
          onChange={(e) => setIP(e.target.value)}
        ></input>
        <button>Search</button>
      </form>
    </div>
  );
};

export default Input;
