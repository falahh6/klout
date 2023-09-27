import Image from "next/image";
import StarIcon from "../../public/svgs/StarIcon.svg";
import styles from "./ReviewsRating.module.css";
const ReviewsRating = () => {
  return (
    <div className={styles.container}>
      <Image src={StarIcon} width={26} height={26} />
      <Image src={StarIcon} width={26} height={26} />
      <Image src={StarIcon} width={26} height={26} />
      <Image src={StarIcon} width={26} height={26} />
      <Image src={StarIcon} width={26} height={26} />
    </div>
  );
};

export default ReviewsRating;
