import Image from "next/image";
import styles from "../page.module.scss";
import LandingImg from "../../../public/LandingImg.png";
import Input from "../Input";
const Home = () => {
  return (
    <main className={styles.landing}>
      <div className={styles.intro}>
        <div className={styles.heading}>
          <h1>
            Get <span>Instant</span> Location data
          </h1>
          <h4>Of Any IP And Completely free!</h4>
        </div>
        <Image src={LandingImg} alt="Landing Image" />
      </div>
      <Input />
    </main>
  );
};

export default Home;
