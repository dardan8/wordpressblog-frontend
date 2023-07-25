import React from "react";
import Link from "next/link";
import styles from "./BlogCard.module.scss";

type BlogCardProps = {
  featuredImage: string;
  slug: string;
  title: string;
  excerpt: string;
};

const BlogCard = ({ featuredImage, slug, title, excerpt }: BlogCardProps) => {
  return (
    <Link href={`/recipes/${slug}`}>
      <div className={styles.card_wrapper}>
        <div className={styles.imagewrapper}>
          <img src={featuredImage} alt='Image' className={styles.card_image} />
        </div>
        <div className={styles.card_body}>
          <h3 className={styles.card_title}>{title}</h3>
          <p>{excerpt}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
