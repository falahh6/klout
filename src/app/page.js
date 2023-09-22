import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/Components/Header/Header";
import ArrawIcon from "../../public/svgs/ArrowIcon.svg";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.heroBanner}>
        <h1>
          GET <span>FREE</span> PUMP CAPS
        </h1>
        <h3>
          WHEN YOU BUY <span>ANY PRE-WORKOUT</span>{" "}
          <span>
            {" "}
            <Image src={ArrawIcon} width={17} height={17} />{" "}
          </span>
          <div className={styles.heroImageDesktop}>
            <Image
              src={
                "https://res.cloudinary.com/dod9nbjke/image/upload/v1692070790/Klout/Banner%20Images/FinalDesktop_gzxmer.jpg"
              }
              width={1512}
              height={820}
            />
          </div>
        </h3>
      </div>
    </main>
  );
}
