import React from "react";
import styles from "./RecipeAttributes.module.scss";

type RecipeAttributeProps = {
  cookingTime: string;
  cookingMethod: string;
  recipeYield: string;
};

const RecipeAttributes = ({
  cookingTime,
  recipeYield,
  cookingMethod,
}: RecipeAttributeProps) => {
  return (
    <div className={styles.attributes_wrapper}>
      <p>
        <span className={styles.icons}>🕛 </span> {cookingTime} Minutes
      </p>
      <p>
        <span className={styles.icons}>👥 </span> {recipeYield} people
      </p>
      <p>
        <span className={styles.icons}>🍽 </span> {cookingMethod}
      </p>
    </div>
  );
};

export default RecipeAttributes;
