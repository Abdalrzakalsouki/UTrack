import Image from "next/image";
import styles from "../page.module.scss";
import LandingImg from "../../../public/LandingImg.png";
import Input from "../Input";

interface IpData {
  continentName: string;
  countryName: string;
  city: string;
  postalCode: number;
  phoneCode: number;
  latitude: string;
  longitude: string;
}

async function getIPData(ip: String) {
  const KEY: string | undefined = process.env.API_KEY;
  try {
    const response = await fetch(
      `http://apiip.net/api/check?ip=${ip}&accessKey=${KEY}`
    );
    if (!response.ok) throw new Error("Could not fetch the data");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function Home({ searchParams }: { searchParams: { q: string } }) {
  const IP: string = searchParams.q;
  const data: IpData = IP !== undefined ? await getIPData(IP) : undefined;
  const ImageClass = `${data ? styles.lighImage : ""}`;
  return (
    <main className={styles.landing}>
      <div className={styles.intro}>
        <div className={styles.heading}>
          <h1>
            Get <span>Instant</span> Location data
          </h1>
          <h4>Of Any IP And Completely free!</h4>
        </div>
        <Image src={LandingImg} className={ImageClass} alt="Landing Image" />
      </div>
      <Input />
      {data !== undefined && (
        <div>
          <div className={styles.card}>
            <p>
              Continent <span>{data.continentName}</span>
            </p>
            <p>
              Country <span>{data.countryName}</span>
            </p>
            <p>
              City <span>{data.city}</span>
            </p>
            <p>
              Postal Code <span>{data.postalCode}</span>
            </p>
            <p>
              Phone Code <span>{data.phoneCode}</span>
            </p>
            <p>
              Latitude <span>{data.latitude}</span>
            </p>
            <p>
              Longitude <span>{data.longitude}</span>
            </p>
          </div>
        </div>
      )}
    </main>
  );
}

export default Home;
