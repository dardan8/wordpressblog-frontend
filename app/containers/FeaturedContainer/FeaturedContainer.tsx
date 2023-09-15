import React from "react";
import styles from "./FeaturedContainer.module.scss";
import Tag from "@/app/components/Tag/Tag";
import Image from "next/image";
import Link from "next/link";
import { getFeaturedPosts } from "@/app/lib/recipeRequests";

const FeaturedContainer = async () => {
  const featuredPosts = await getFeaturedPosts();
  const featuredPost = featuredPosts[0];

  return (
    <div className={`${styles.featuredcontainer} container`}>
      <Link href={`/recipes/${featuredPost.slug}`}>
        <div className={styles.left}>
          <Tag tag='Featured' />
          <h1>{featuredPost.title}</h1>
          <h3 className={styles.featured_excerpt}>{featuredPost.excerpt}</h3>
          <p>By: {featuredPost.recipeAuthor}</p>
        </div>
      </Link>

      <div className={styles.right}>
        <div className={styles.imagewrapper}>
          <Image
            src={featuredPost.featuredImage.node.mediaItemUrl}
            width={500}
            height={300}
            alt='Featured Image'
            className={styles.featured_image}
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedContainer;
