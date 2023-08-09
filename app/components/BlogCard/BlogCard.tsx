import React from "react";
import Link from "next/link";
import styles from "./BlogCard.module.scss";
import { FaRegClock, FaRegUser } from "react-icons/fa6";
import { GrRestaurant } from "react-icons/gr";

type BlogCardProps = {
  featuredImage: string;
  slug: string;
  title: string;
  excerpt?: string;
  cookingTime: string;
  servings: string;
  cookingMethod: string;
};

const BlogCard = ({
  featuredImage,
  slug,
  title,
  excerpt,
  cookingTime,
  servings,
  cookingMethod,
}: BlogCardProps) => {
  return (
    <Link href={`/recipes/${slug}`}>
      <div className={styles.card_wrapper}>
        <div className={styles.imagewrapper}>
          <img src={featuredImage} alt='Image' className={styles.card_image} />
        </div>
        <div className={styles.card_body}>
          <h3 className={styles.card_title}>{title}</h3>
          <p className={styles.card_excerpt}>{excerpt}</p>
          <div className={styles.card_bottom}>
            <div className={styles.card__iconarea}>
              <FaRegClock className={styles.card_icon} /> {cookingTime} minutes
            </div>
            <div className={styles.card__iconarea}>
              <FaRegUser className={styles.card_icon} /> {servings}
              {servings == "1" ? " Person" : " People"}
            </div>
            <div className={styles.card__iconarea}>
              <GrRestaurant className={styles.card_icon} /> {cookingMethod}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
