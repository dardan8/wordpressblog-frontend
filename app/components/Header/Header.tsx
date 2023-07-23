import React from "react";
import Image from "next/image";
import styles from "./Header.module.scss";
import Tag from "../Tag/Tag";

type HeaderProps = {
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
  mealType: string;
};

const Header = ({ title, excerpt, imageUrl, date, mealType }: HeaderProps) => {
  return (
    <div className={styles.header_wraper}>
      <div>
        <Tag tag={mealType} link='/recipe' />
        {/* <Tag tag='Name' link='/recipe' /> */}
        <h1>{title}</h1>
        <h3>{excerpt}</h3>
        <p>{date}</p>
      </div>
      <Image src={imageUrl} alt='Header Image' width={500} height={300} />
    </div>
  );
};

export default Header;
