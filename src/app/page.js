import Image from "next/image";
import styles from "./page.module.css";

import Header from "@/Components/Header/Header";
import ImageContainer from "@/Components/ImageContainer/ImageContainer";
import Infobox from "@/Components/InfoBox/Infobox";
import ProductCards from "@/Components/ProductCards/ProductCards";
import ReviewBox from "@/Components/ReviewBox/ReviewBox";
import Footer from "@/Components/Footer/Footer";
import Cta from "@/Components/Cta/Cta";

import ArrawIcon from "../../public/svgs/ArrowIcon.svg";
import AArrawIcon from "../../public/svgs/ArrowIconP.svg";
import LightningIcon from "../../public/svgs/LightningIcon.svg";
import FireIcon from "../../public/svgs/FireIcon.svg";
import VerifiedIcon from "../../public/svgs/verifiedIcon.svg";
import EyeIcon from "../../public/svgs/EyeIcon.svg";
import DangerIcon from "../../public/svgs/DangerrIcon.svg";
import FlexIcon from "../../public/svgs/FlexIcon.svg";
import WaterIcon from "../../public/svgs/WaterIcon.svg";
import StarIcon from "../../public/svgs/StarrIcon.svg";
import Features from "@/Components/Features/Features";
import USAIcon from "../../public/svgs/USASheildIcon.svg";
import MoleculeIcon from "../../public/svgs/MoleculeIcon.svg";
import NoContractsIcon from "../../public/svgs/NoContractsIcon.svg";
import ElectricIcon from "../../public/svgs/TimerAlmostDoneIcon.svg";

const infoBoxConfig = [
  {
    title: "PUMP LEVELS",
    description:
      "Fuel your muscles with the might of VasoDrive™ and NO3-T Nitrates. As Pump Kaps work their magic, feel each rep gradually increase muscle fullness until you achieve the most skin-tearing pump of your life.",
    ratingImg:
      "https://res.cloudinary.com/dod9nbjke/image/upload/v1691885020/Klout/Misc%20Assets/810-min_ocdggb.png",
    highlight: "VasoDrive™ Power",
    hIcon: LightningIcon,
  },
  {
    title: "BLOOD FLOW",
    description:
      "Backed by the strength of AmentoPump, as you shatter your limits, enhanced blood flow allows for more pronounced veins, ensuring peak performance and an unparalleled physique.",
    ratingImg:
      "https://res.cloudinary.com/dod9nbjke/image/upload/v1691885020/Klout/Misc%20Assets/810-min_ocdggb.png",
    highlight: "Peak performance",
    hIcon: FireIcon,
  },
  {
    title: "STRENGTH LEVELS",
    description:
      "Unlock next-level strength and stamina powered by VasoDrive and AmentoPump. With Pump Kaps, every set and rep is supercharged, letting you lift heavier and persevere longer in even the most demanding sessions.",
    ratingImg:
      "https://res.cloudinary.com/dod9nbjke/image/upload/v1691885020/Klout/Misc%20Assets/710-min_bqwmqo.png",
    highlight: "Supercharged sets",
    hIcon: LightningIcon,
  },
];

const Products = [
  {
    src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1691949825/Klout/Product%20Images/KAIO-PsychoSerum-Front-Plain-min_efdscx.png",
    title: "kaio final destination",
    price: "$57.00",
    description:
      "KAIO, the apex pre-workout, boasts eight trademarked ingredients including NO3-T Nitrate, delivering unmatched energy, focus, and intense pumps for transformative workouts.",
    values: [
      {
        title: "insane power",
        icon: DangerIcon,
      },
      {
        title: "Elevated Focus",
        icon: EyeIcon,
      },
      {
        title: "Intense Pumps",
        icon: FlexIcon,
      },
    ],
    link: "/kaio-fd",
  },
  {
    src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1691949825/Klout/Product%20Images/Kaio_Pump-min_hittuz.png",
    title: "kaio pump & performance",
    price: "$57.00",
    description:
      "KAIO Pump & Performance is a 3-in-1 powerhouse, blending optimal pumps, extended endurance, and premium hydration for peak training sessions.",
    values: [
      {
        title: "Intense Pumps",
        icon: FireIcon,
      },
      {
        title: "Max Endurance",
        icon: WaterIcon,
      },
      {
        title: "No Caffeine",
        icon: VerifiedIcon,
      },
    ],
    link: "/kaio-pump",
  },
  {
    src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1691949826/Klout/Product%20Images/Mamba-SourParadise-Front-Plain-min_jqoaet.png",
    title: "Klout mamba high-stim",
    price: "$47.00",
    description:
      "Mamba delivers unparalleled high-stim energy, a premium NO3-T Nitrate pump, and intense focus with five trademarked ingredients, ensuring a unique flavor-packed experience.",
    values: [
      {
        title: "crazy Energy",
        icon: DangerIcon,
      },
      {
        title: "dailed focus",
        icon: EyeIcon,
      },
      {
        title: "Insane Drive",
        icon: FireIcon,
      },
    ],
    link: "/mamba",
  },
  {
    src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1691949825/Klout/Product%20Images/Karma-ArcticCherry-Front-Plain-min_ogshhd.png",
    title: "Klout karma low-stim",
    price: "$47.00",
    description:
      "Karma offers a low-stim, nootropic-rich blend with smooth energy, making it ideal for those seeking profound focus without excessive stimulants.",
    values: [
      {
        title: "Low-Caffeine",
        icon: VerifiedIcon,
      },
      {
        title: "crash-free",
        icon: StarIcon,
      },
      {
        title: "unreal focus",
        icon: EyeIcon,
      },
    ],
    link: "/karma",
  },
];

const Reviews = [
  {
    heading: "The BEST pump",
    text: "The BEST pump I have ever received. If you want to feel like you are going to bust through your shirt, take pump kaps!",
    stars: 5,
    darkTheme: true,
    themeColor: "var(--primaryColor)",
    name: "Taryn P.",
  },
  {
    heading: "Pump like never before",
    text: "Stacking with the kaio gives me a pump like never before. Great product!",
    stars: 5,
    darkTheme: true,
    themeColor: "var(--primaryColor)",
    name: "Christopher T.",
  },
  {
    heading: "Good extra pump",
    text: "Gives you a good extra pump!, The BEST pump I have ever received. If you want to feel like you are going to bust through your shirt",
    stars: 5,
    darkTheme: true,
    themeColor: "var(--primaryColor)",
    name: "Donterrius W.",
  },
  {
    heading: " I’m zoned in",
    text: "I take these as I’m headed out the door to the gym and by the time I’m done a warm up I’m zoned in. Makes me sweat like crazy so stay hydrated. Pump.",
    stars: 5,
    darkTheme: true,
    themeColor: "var(--primaryColor)",
    name: "Jojo M.",
  },
  {
    heading: "Feel huge everytime😈",
    text: "Skin splitting pumps!! Not only are the pumps amazing but Makes me feel huge everytime😈",
    stars: 5,
    darkTheme: true,
    themeColor: "var(--primaryColor)",
    name: "Conner A.",
  },
  {
    heading: "Best pump product",
    text: "Easily the best pump product ever. Not only are the pumps amazing, but the workout this gave me was by far one of the best workouts I’ve had",
    stars: 5,
    darkTheme: true,
    themeColor: "var(--primaryColor)",
    name: "James N.",
  },
  {
    heading: "Beats any powder",
    text: "Best pump product I’ve ever had, this stuff beats any powder form of pump I’ve had",
    stars: 5,
    darkTheme: true,
    themeColor: "var(--primaryColor)",
    name: "Gage W.",
  },
  {
    heading: "Pumps that are out of this mofo world",
    text: "Stack this with the Mamba and you will have pumps that are out of this mofo world",
    stars: 5,
    darkTheme: true,
    themeColor: "var(--primaryColor)",
    name: "Andrew L.",
  },
];

const features = [
  {
    heading: "PROUDLY MADE IN THE USA",
    subtext: "",
    icon: USAIcon,
  },
  {
    heading: "HIGH QUALITY INGREDIENTS",
    subtext: "",
    icon: MoleculeIcon,
  },
  {
    heading: "FORMULATED BY EXPERTS",
    subtext: "",
    icon: ElectricIcon,
  },
  {
    heading: "TRANSPARENT LABELS",
    subtext: "",
    icon: NoContractsIcon,
  },
];

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
          {/* background image */}
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

      <div className={styles.features}>
        {features.map((item, index) => (
          <Features {...item} key={index} />
        ))}
      </div>

      <div className={styles.footer}>
        <Footer />
      </div>
    </main>
  );
}
