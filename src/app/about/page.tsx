import styles from "../page.module.scss";
import * as pack from "../../../package.json";

export default function About() {
  const author: string = pack.author;
  const version: string = pack.version;
  return (
    <main>
      <div className={styles.headings}>
        <h1>UTrack</h1>
        <h3>IP Detection App</h3>
        <h6>Version {version}</h6>
      </div>
      <div className={styles.grid}>
        <ul>
          <h2>Featuers</h2>
          <li>Retrieve Continent</li>
          <li>Retrieve Country</li>
          <li>Retrieve City</li>
          <li>Retrieve Latitude and Longitude</li>
          <li>Retrieve Post Code</li>
          <li>Retrieve Phone Code</li>
          <li>Check Proxy</li>
          <li>Check TOR</li>
        </ul>
        <div className={styles.credit}>
          <h2>Credits</h2>
          <h4>{author}</h4>
        </div>

        <ul>
          <h2>UpComing</h2>
          <li>Google Map</li>
          <li>IP Auto Detection</li>
          <li>PWA</li>
          <li>Accessibility</li>
          <li>Improve Performance</li>
          <li>Google Tracking</li>
          <li>IP Verification</li>
          <li>Buy Me Coffee</li>
        </ul>
      </div>
    </main>
  );
}
