import React from "react";
import Link from "next/link";
import styles from "./HorizontalCard.module.scss";

type HorizontalCardProps = {
  featuredImage: string;
  slug: string;
  title: string;
  excerpt?: string;
};

const HorizontalCard = ({
  featuredImage,
  slug,
  title,
  excerpt,
}: HorizontalCardProps) => {
  return (
    <Link href={`/recipes/${slug}`}>
      <div className={styles.hcard_wrapper}>
        <div className={styles.imagewrapper}>
          <img src={featuredImage} alt='Image' className={styles.card_image} />
        </div>
        <div className={styles.card_body}>
          <h3 className={styles.card_title}>{title}</h3>
          <p>{excerpt}</p>
          <div>
            <span className={styles.card_items}>4 people | 20 minutes</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HorizontalCard;
