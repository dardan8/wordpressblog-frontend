import React from "react";
import styles from "./NoRecipes.module.scss";
import { BiSolidError } from "react-icons/bi";
import Link from "next/link";

const NoRecipes = () => {
  return (
    <div className={styles.errorwrapper}>
      <h1 className={styles.error_area}>
        <BiSolidError className={styles.error_icon} /> Oops
      </h1>
      <h1>
        Looks like there are <br /> no recipes on this category.
      </h1>
      <Link href='/recipes'>
        <h3 className={styles.back_text}>Go back to all recipes?</h3>
      </Link>
    </div>
  );
};

export default NoRecipes;
