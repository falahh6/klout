import Image from "next/image";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div>
        <div className={styles.about}>
          <h4>About KLOUT</h4>
          <p>
            KLOUT is the power to control one’s circumstances. KLOUT is a force
            of nature. It chooses you. It pulls you to a higher place than that
            which you previously were.
          </p>
        </div>
        <div className={styles.disclaimer}>
          <h4>Disclaimer</h4>
          <p>
            † These statements have not been evaluated by the Food and Drug
            Administration. These products are not intended to diagnose, treat,
            cure or prevent any disease.
          </p>
        </div>
        <div className={styles.logo}>
          <Image
            src={
              "https://res.cloudinary.com/dod9nbjke/image/upload/v1692071165/Klout/Logos/KloutAlian-White_oijjex.png"
            }
            width={170}
            height={64}
          />
        </div>
      </div>
      <p className={styles.powered}>
        Powered by <span>FitScale.net</span>
      </p>
    </div>
  );
};

export default Footer;
