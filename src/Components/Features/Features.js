import Image from "next/image";
import styles from "./Features.module.css";
import Link from "next/link";

const Features = ({ heading, icon }) => {
  return (
    <div className={styles.featuresConatiner}>
      <Image src={icon} width={20} height={30} />
      <h3>{heading}</h3>
      <Link href={"/"}>view details</Link>
    </div>
  );
};

export default Features;
