import ReviewsRating from "@/helpers/ReviewsRating";
import styles from "./ReviewBox.module.css";
import VerifiedIcon from "../../../public/svgs/verifiedIcon.svg";
import Image from "next/image";
import QuotesIcon from "../../../public/svgs/QuotesIcon.svg";

const ReviewBox = ({ heading, text, name }) => {
  return (
    <div className={styles.ReviewBox}>
      <Image
        src={QuotesIcon}
        width={30}
        height={30}
        className={styles.QuotesIcon}
      />
      <ReviewsRating />
      <h4>{heading}</h4>
      <p>{text}</p>
      <p>
        <span>
          <Image src={VerifiedIcon} width={16} height={16} />
        </span>
        Verified buyer | {name}
      </p>
    </div>
  );
};

export default ReviewBox;
