import React from "react";
import styles from "./BlogOverviewHeader.module.scss";
import Link from "next/link";
import Button from "../Button/Button";

const BlogOverviewHeader = () => {
  return (
    <div className={styles.header}>
      <h1>Welcome to the Headless Recipe Blog</h1>
      <h3>Delicious meals for every taste</h3>
      <Link href='/recipes'>
        <Button placeholder='View all recipes' />
      </Link>
    </div>
  );
};

export default BlogOverviewHeader;
