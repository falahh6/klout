import Image from "next/image";
import styles from "./Infobox.module.css";

const Infobox = ({ title, ratingImg, description, highlight, hIcon }) => {
  return (
    <div className={styles.container}>
      <div>
        <h4>{title}</h4>
        <div>
          <Image
            src={ratingImg}
            width={180}
            height={54}
            className={styles.ratings}
          />
        </div>
        <p>{description}</p>
      </div>
      <div className={styles.Highlight}>
        <Image src={hIcon} width={20} height={20} />
        <p>{highlight}</p>
      </div>
    </div>
  );
};

export default Infobox;
