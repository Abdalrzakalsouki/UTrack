"use client";
import { useState, useRef } from "react";
import styles from "./page.module.scss";
import { useRouter } from "next/navigation";
import { isIP } from "is-ip";
const Input = () => {
  const [placeholder, setPlaceHolder] = useState("IP address...");
  const [IP, setIP] = useState("");
  const router = useRouter();
  const validateText = useRef<HTMLParagraphElement>(null);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (isIP(IP)) {
      router.push(`./home?q=${IP}`);
      validateText.current ? (validateText.current.textContent = "") : "";
    } else {
      if (validateText.current !== null) {
        validateText.current.textContent = "IP address is not valid";
        window.history.replaceState(null, "", "/home");
      }
    }
    setIP("");
  };

  return (
    <div>
      <div className={styles.inputs}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder={placeholder}
            onFocus={() => setPlaceHolder("")}
            onChange={(e) => setIP(e.target.value)}
            value={IP}
          ></input>
          <button>Search</button>
        </form>
      </div>
      <p className={styles.validation} ref={validateText}></p>
    </div>
  );
};

export default Input;
