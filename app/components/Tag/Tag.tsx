import React from "react";
import styles from "./Tag.module.scss";
import Link from "next/link";

type TagProps = {
  tag: string;
  link: string;
};

const Tag = ({ tag, link }: TagProps) => {
  return (
    <Link href={link}>
      <span className={styles.tag}>{tag}</span>
    </Link>
  );
};

export default Tag;
