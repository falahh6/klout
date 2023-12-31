import Image from "next/image";
import styles from "./Header.module.css";
import DangerIcon from "../../../public/svgs/DangerIcon.svg";

const Header = () => {
  return (
    <div className={styles.container}>
      <Image
        src={
          "https://res.cloudinary.com/dod9nbjke/image/upload/v1692071165/Klout/Logos/KloutAlian-White_oijjex.png"
        }
        width={170}
        height={64}
        className={styles.desktopLogo}
      />
      <Image
        src={
          "https://res.cloudinary.com/dod9nbjke/image/upload/v1691872483/Klout/Logos/Alian-Green-min_d4vyct.png"
        }
        width={45}
        height={49}
        className={styles.mobileLogo}
      />
      <div className={styles.offerHead}>
        <Image src={DangerIcon} width={19} height={16} alt="warning icon" />
        <h4>LIMITED TIME OFFER!</h4>
      </div>
      <h3 className={styles.headerHastag}>#PWRTOCONTROL</h3>
    </div>
  );
};

export default Header;
