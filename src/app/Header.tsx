import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.scss";
import Logo from "../../public/Logo.svg";
import ToggleTheme from "./ToggleThem";
import { AiFillGithub, AiTwotoneMail, AiFillLinkedin } from "react-icons/ai";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <Link href="/home">
            <Image src={Logo} alt="Logo" className={styles.logo} />{" "}
          </Link>
        </div>
        <ul className={styles.navgation}>
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
        <ToggleTheme />
        <div className={styles.social}>
          <Link
            href="https://github.com/Abdalrzakalsouki"
            target="_blank"
            aria-label="Github"
          >
            <AiFillGithub aria-hidden="true" />
          </Link>
          <Link
            href="mailto:abdulrzakalsssouki@gmail.com"
            target="_blank"
            aria-label="Email"
          >
            <AiTwotoneMail aria-hidden="true" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/abdulrazzakalsssouki"
            target="_blank"
            aria-label="LinkedIn"
          >
            <AiFillLinkedin aria-hidden="true" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
