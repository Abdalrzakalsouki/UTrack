import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.scss";
import Logo from "../../public/Logo.svg";
import { AiFillGithub, AiTwotoneMail, AiFillLinkedin } from "react-icons/ai";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <Image src={Logo} alt="Logo" className={styles.logo} />
        </div>
        <ul className={styles.navgation}>
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
        <div className={styles.social}>
          <AiFillGithub />
          <AiTwotoneMail />
          <AiFillLinkedin />
        </div>
      </div>
    </header>
  );
};

export default Header;
