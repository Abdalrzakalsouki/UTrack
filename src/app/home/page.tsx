import Image from "next/image";
import styles from "../page.module.scss";
import LandingImg from "../../../public/LandingImg.png";
import Input from "src/app/Input";
import Map from "src/app/Map";

interface IpData {
  mobile?: boolean;
  proxy?: boolean;
  query?: number;
  continent?: string;
  country?: string;
  city: string;
  lat?: string;
  lon?: string;
  zip?: number;
  continentName?: string;
  countryName?: string;
  postalCode?: number;
  latitude?: number;
  longitude?: number;
  phoneCode?: number;
  ip?: number;
}

async function getIpDataEmergency(ip: string) {
  try {
    const KEY: string | undefined = process.env.API_KEY;
    const response = await fetch(
      `http://apiip.net/api/check?ip=${ip}&accessKey=${KEY}`
    );
    if (!response.ok) throw new Error("Could not fetch data");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function getIpDataMain(ip: string) {
  try {
    const response = await fetch(
      `http://ip-api.com/json/${ip}?fields=continent,country,city,zip,lat,lon,query`
    );
    if (!response.ok) {
      const data = await getIpDataEmergency(ip);
      return data;
    }
    const data: IpData = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function Home({ searchParams }: { searchParams: { q: string } }) {
  const IP: string = searchParams.q;
  const data = IP !== undefined ? await getIpDataMain(IP) : undefined;
  const ImageLighter = `${data ? styles.lighImage : ""}`;

  return (
    <main className={styles.landing}>
      <div className={styles.intro}>
        <div className={styles.heading}>
          <h1>
            Get <span>Instant</span> Location data
          </h1>
          <h2>Of Any IP And Completely free!</h2>
        </div>
        <div className={styles.ImageContiner}>
          <Image src={LandingImg} alt="Landing Image" />
          <div className={ImageLighter}></div>
        </div>
      </div>
      <Input />
      {data !== undefined && (
        <div>
          <div className={styles.card}>
            <p className={styles.ip}>
              IP Address <span>{data.query || data.ip}</span>
            </p>
            <p className={styles.light}>
              Continent <span>{data.continent || data.continentName}</span>
            </p>
            <p className={styles.light}>
              Country <span>{data.country || data.countryName}</span>
            </p>
            <p className={styles.light}>
              City <span>{data.city}</span>
            </p>
            <p className={styles.light}>
              Latitude <span>{data.lat || data.latitude}</span>
            </p>
            <p className={styles.light}>
              Longitude <span>{data.lon || data.Longitude}</span>
            </p>
            {data.zip ? (
              <p className={styles.light}>
                Zip<span>{data.zip}</span>
              </p>
            ) : (
              <p className={styles.light}>
                Post Code<span>{data.postalCode}</span>
              </p>
            )}
          </div>
          <Map
            latitude={data.lat || data.latitude}
            longitude={data.lon || data.Longitude}
          />
        </div>
      )}
    </main>
  );
}

export default Home;
