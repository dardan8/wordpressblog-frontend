import React from "react";
import Link from "next/link";
import styles from "./HorizontalCard.module.scss";
import { FaRegClock, FaRegUser } from "react-icons/fa6";

type HorizontalCardProps = {
  featuredImage: string;
  slug: string;
  title: string;
  excerpt?: string;
  servings: string;
  cookingTime: string;
};

const HorizontalCard = ({
  featuredImage,
  slug,
  title,
  excerpt,
  servings,
  cookingTime,
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
            <span className={styles.card_items}>
              <FaRegUser className={styles.card__iconarea} />
              {servings} Servings
              <FaRegClock className={styles.card__iconarea} />
              {cookingTime} Min
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HorizontalCard;
