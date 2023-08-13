import React from "react";
import styles from "./RecipeAttributes.module.scss";
import { FaRegClock, FaRegUser } from "react-icons/fa6";
import { PiCookingPotBold } from "react-icons/pi";

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
        <span className={styles.icons}>
          <FaRegClock className={styles.attr_icon} />
        </span>
        {cookingTime} Minutes
      </p>
      <p>
        <span className={styles.icons}>
          <FaRegUser className={styles.attr_icon} />
        </span>
        {recipeYield} people
      </p>
      <p>
        <span className={styles.icons}>
          <PiCookingPotBold className={styles.attr_icon} />
        </span>
        {cookingMethod}
      </p>
    </div>
  );
};

export default RecipeAttributes;
