import React from "react";
import "./CategoryTag.module.scss";
import Link from "next/link";
import styles from "./CategoryTag.module.scss";

type CatTagProps = {
  name: string;
  link: string;
};

const CategoryTag = ({ name, link }: CatTagProps) => {
  return (
    <Link href={link} target='_blank'>
      <span className={styles.categorytag}>{name}</span>
    </Link>
  );
};

export default CategoryTag;
