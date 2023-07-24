import React from "react";
import styles from "./FeaturedContainer.module.scss";
import Tag from "@/app/components/Tag/Tag";
import Image from "next/image";
import FeaturedImage from "../../../public/assets/images/brooke-lark-4J059aGa5s4-unsplash.jpg";
const FeaturedContainer = () => {
  return (
    <div className={`${styles.featuredcontainer} container`}>
      <div className={styles.left}>
        <Tag tag='Featured' />
        <h1>Recipe Title - delicios meal for ya</h1>
        <h3>
          This is the perfect meal to eat with your fam on a lovely summer
          night.
        </h3>
        <p>Publish on October</p>
      </div>
      <div className={styles.right}>
        <div className={styles.imagewrapper}>
          <Image
            src={FeaturedImage}
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
