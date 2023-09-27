import Image from "next/image";
import styles from "./ProductCards.module.css";

const ProductCards = ({ src, title, description, price, values }) => {
  const valuess = values.map((item, index) => {
    return (
      <li key={index}>
        <Image
          src={item.icon.src}
          width={14}
          style={{ fill: "white" }}
          height={14}
        />
        <span>{item.title}</span>
      </li>
    );
  });
  return (
    <div className={styles.ProductCards}>
      <Image
        src={src}
        className={styles.desktopInage}
        width={208}
        height={260}
      />
      <Image
        src={src}
        className={styles.mobileImage}
        width={108}
        height={120}
      />
      <h4>{title}</h4>
      <p>{description}</p>
      <ul>{valuess}</ul>
      <p>
        {price} <span>~ 25 serv.</span>
      </p>
      <button>More Info</button>
    </div>
  );
};

export default ProductCards;
