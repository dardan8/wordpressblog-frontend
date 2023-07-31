import React from "react";
import styles from "./Ingredients.module.scss";

type IngredientsProps = {
  ingredients: string;
};

const Ingredients = ({ ingredients }: IngredientsProps) => {
  return (
    <div
      className={styles.ingredients_wrapper}
      dangerouslySetInnerHTML={{ __html: ingredients }}
    />
  );
};

export default Ingredients;
