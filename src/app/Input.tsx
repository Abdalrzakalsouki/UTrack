"use client";
import { useState, useRef, SyntheticEvent, useEffect } from "react";
import styles from "./page.module.scss";
import { useRouter } from "next/navigation";
import { isIP } from "is-ip";

const Input = () => {
  const [placeholder, setPlaceHolder] = useState<string>("IP address...");
  const [IP, setIP] = useState<string>("");
  const [userIP, setUserIP] = useState<string>("");
  const router = useRouter();
  const validateText = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const getUserIP = async () => {
      const response = await fetch(`https://api.ipify.org/?format=json`);
      if (!response.ok) throw new Error("Could not get user IP address");
      const data = await response.json();
      setUserIP(data.ip);
    };
    getUserIP().catch((error) => console.error(error));
  }, []);

  const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
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
      {userIP !== undefined && (
        <p className={styles.userIP}>
          Your IP address is: <span>{userIP}</span>
        </p>
      )}
      <div className={styles.inputs}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            aria-labelledby="ip label"
            placeholder={placeholder}
            onFocus={() => setPlaceHolder("")}
            onChange={(e) => setIP(e.target.value)}
            value={IP}
          ></input>
          <button>Search</button>
        </form>
      </div>
      <div className={styles.validation} ref={validateText}></div>
    </div>
  );
};

export default Input;
