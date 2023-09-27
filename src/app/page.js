import Image from "next/image";
import styles from "./page.module.css";

// components
import Header from "@/Components/Header/Header";
import ImageContainer from "@/Components/ImageContainer/ImageContainer";
import Infobox from "@/Components/InfoBox/Infobox";
import ProductCards from "@/Components/ProductCards/ProductCards";
import ReviewBox from "@/Components/ReviewBox/ReviewBox";
import Footer from "@/Components/Footer/Footer";
import Cta from "@/Components/Cta/Cta";

// icons
import ArrawIcon from "../../public/svgs/ArrowIcon.svg";
import AArrawIcon from "../../public/svgs/ArrowIconP.svg";
import VerifiedIcon from "../../public/svgs/verifiedIcon.svg";
import Features from "@/Components/Features/Features";

// configs
import { infoBoxConfig, Products, features, Reviews } from "../helpers/Configs";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* header */}
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
          {/* background image(s) */}
          <div className={styles.heroImageDesktop}>
            <ImageContainer />
          </div>
          <div className={styles.leftBannerOffer}>
            <h3>
              PUMP CAPS RETAIL PRICE : <br /> <span>$35</span>{" "}
              <span>FREE!</span>{" "}
            </h3>
          </div>
          <div className={styles.rightBannerOffer}>
            <h3>
              PLUS, EXPERIENCE ONE <br /> OF OUR PRE- <br />
              WORKOUTS{" "}
            </h3>
          </div>
        </h3>
      </div>

      {/* Pump info */}
      <div className={styles.mobileCta}>
        <Cta />
        <Cta />
      </div>
      <div className={styles.pumpInfoContainer}>
        <h3>TRY THE KING OF PUMPS FOR FREE</h3>
        <p>
          Our industry-leading Pump Kaps are your new secret weapon for
          unlocking skin-splitting pumps that not only feel incredible but make
          you look absolutely diced.
        </p>
        <div className={styles.pumpInfoCards}>
          <div className={styles.pumpInfoHeader}>
            <h4>OUT OF THIS WORLD PUMPS</h4>
            <p>
              Meet KLOUT's Pump Kaps; formulated with cutting-edge ingredients,
              they promise skin-splitting pumps that make every muscle and vein
              stand out. With Pump Kaps, elevate both your performance and
              appearance to champion levels.
            </p>
          </div>
          {infoBoxConfig.map((item, index) => (
            <Infobox {...item} key={index} />
          ))}
        </div>
        <Cta />
      </div>

      {/* Product gallery */}
      <div className={styles.navProducts}>
        <p>
          VIEW PRODUCT BREAKDOWN{" "}
          <span>
            {" "}
            <Image src={AArrawIcon} width={16} height={16} />
          </span>
        </p>
        <div className={styles.mobileCta}>
          <Cta />
        </div>
      </div>
      <div className={styles.productsGallery}>
        <h2>STACK YOUR KAPS WITH ONE OF OUR INDUSTRY-LEADING PRES</h2>
        <p>
          Experience unmatched energy with one of our elite pre-workout
          products. To ensure you're fully equipped, we're gifting you the kaps
          as a special bonus to add to the stack.
        </p>
        <div className={styles.ProductCardsContainer}>
          {Products.map((item, index) => (
            <ProductCards {...item} key={index} />
          ))}
        </div>
      </div>

      {/* Additional Call to Action button */}
      <div className={styles.ctaPostProducts}>
        <Cta />
      </div>

      {/*  Reviews section */}
      <div className={styles.Reviews}>
        <h1>
          THOUSANDS HAVE SPOKEN, KLOUT <br /> PWR IS UNMATCHED
        </h1>
        <p>
          Klout PWR stands unparalleled in it’s league. The raving reviews of
          thousands can't be wrong – experience the unmatched power for
          yourself.
        </p>
        <div className={styles.highlightReview}>
          <span>
            <Image src={VerifiedIcon} width={16} height={16} />
          </span>{" "}
          1000+ Verified Reviews
        </div>

        <div className={styles.ReviewBoxContainer}>
          {Reviews.map((item, index) => (
            <ReviewBox {...item} key={index} />
          ))}
        </div>
        <Cta />
      </div>

      {/* Features */}
      <div className={styles.features}>
        {features.map((item, index) => (
          <Features {...item} key={index} />
        ))}
      </div>

      {/* Footer */}
      <div className={styles.footer}>
        <Footer />
      </div>
    </main>
  );
}
