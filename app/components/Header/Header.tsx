import React from "react";
import Image from "next/image";
import styles from "./Header.module.scss";
import Tag from "../Tag/Tag";
import Author from "../Author/Author";
import DateElement from "../../lib/dateConverter";

type HeaderProps = {
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
  mealType: string;
  authorName: string;
  authorImage: string;
};

const Header = ({
  title,
  excerpt,
  imageUrl,
  date,
  mealType,
  authorName,
  authorImage,
}: HeaderProps) => {
  return (
    <div className={`${styles.header_wraper} container`}>
      <div className={styles.header_left}>
        <div className={styles.tag_wrapper}>
          <Tag tag={mealType + " Recipe"} />
        </div>
        <h1>{title}</h1>
        <h3>{excerpt}</h3>
        <time dateTime={date}> </time>
        <Author authorName={authorName} imageURL={authorImage} />
        <p>
          Published on <DateElement dateInput={date} />
        </p>
      </div>
      <div className={styles.header_right}>
        <Image
          src={imageUrl}
          alt='Header Image'
          width={500}
          height={300}
          className={styles.header_image}
        />
      </div>
    </div>
  );
};

export default Header;
