import React from "react";
import styles from "./Tag.module.scss";
import Link from "next/link";

type TagProps = {
  tag: string;
  link?: string;
};

const Tag = ({ tag, link }: TagProps) => {
  return link ? (
    <Link href={link}>
      <span className={styles.tag}>{tag}</span>
    </Link>
  ) : (
    <span className={styles.tag_nolink}>{tag}</span>
  );
};

export default Tag;
