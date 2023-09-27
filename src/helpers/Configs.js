// All the required comfigs required throughout the landing page are presented here

// icons used in config
import EyeIcon from "../../public/svgs/EyeIcon.svg";
import DangerIcon from "../../public/svgs/DangerrIcon.svg";
import FlexIcon from "../../public/svgs/FlexIcon.svg";
import WaterIcon from "../../public/svgs/WaterIcon.svg";
import StarIcon from "../../public/svgs/StarrIcon.svg";
import USAIcon from "../../public/svgs/USASheildIcon.svg";
import MoleculeIcon from "../../public/svgs/MoleculeIcon.svg";
import NoContractsIcon from "../../public/svgs/NoContractsIcon.svg";
import ElectricIcon from "../../public/svgs/TimerAlmostDoneIcon.svg";
import LightningIcon from "../../public/svgs/LightningIcon.svg";
import FireIcon from "../../public/svgs/FireIcon.svg";
import VerifiedIcon from "../../public/svgs/verifiedIcon.svg";

// Alternatively we can use GUI Object type Databases like Supabase or Firebase to store this DATA
export const infoBoxConfig = [
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

export const Products = [
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

export const Reviews = [
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

export const features = [
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
