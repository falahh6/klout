"use client";

import styles from "./ImageContainer.module.css";
import Image from "next/image";

const ImageContainer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.firstHalf}>
        <Image
          src={
            "https://res.cloudinary.com/dod9nbjke/image/upload/v1692070790/Klout/Banner%20Images/FinalDesktop_gzxmer.jpg"
          }
          width={1412}
          height={820}
          className={styles.desktopImage}
        />
        <Image
          src={
            "https://res.cloudinary.com/dod9nbjke/image/upload/v1691874657/Klout/Banner%20Images/KloutHero-BG1_ywuykx.jpg"
          }
          width={393}
          height={820}
          className={styles.mobileImage}
        />
        <Image
          src={
            "https://res.cloudinary.com/dod9nbjke/image/upload/v1691874658/Klout/Banner%20Images/KloutBannerProducts_lyu7zq.png"
          }
          width={393}
          height={700}
          style={{ marginTop: "3rem" }}
          className={`${styles.mobileImage} ${styles.productImage}`}
        />
      </div>
      {/* main banner second half */}
      <div className={styles.secondHalf}>
        <Image
          src={
            "https://res.cloudinary.com/dod9nbjke/image/upload/v1692077772/Klout/Banner%20Images/Realfinaldesktop_dckdaz.jpg"
          }
          width={1412}
          height={684}
          className={styles.desktopImage}
        />
        <Image
          src={
            "https://res.cloudinary.com/dod9nbjke/image/upload/v1691874657/Klout/Banner%20Images/KloutHero-BG2_pp3nvj.jpg"
          }
          width={393}
          height={500}
          className={`${styles.mobileImage}`}
        />
      </div>

      {/* Second section Background one */}
      <Image
        src={
          "https://res.cloudinary.com/dod9nbjke/image/upload/v1692075195/Klout/Banner%20Images/DesktopBanner2-v4_ovpzk0.jpg"
        }
        width={1412}
        height={1670}
        className={`${styles.desktopImage} ${styles.productGalleryImage}`}
      />
      <Image
        src={
          "https://res.cloudinary.com/dod9nbjke/image/upload/v1691948992/Klout/Banner%20Images/Pre-banner-1_dbe7aj.jpg"
        }
        width={393}
        height={1500}
        className={`${styles.mobileImage}  ${styles.secondHalfBackground}`}
      />
    </div>
  );
};

export default ImageContainer;
