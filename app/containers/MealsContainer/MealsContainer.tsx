import React from "react";
import "./MealsContainer.module.scss";
import { getMealTypes } from "@/app/lib/posts";
import CategoryTag from "@/app/components/CategoryTag/CategoryTag";
import styles from "./MealsContainer.module.scss";

type MealProps = {
  id: string;
  name: string;
};
const MealsContainer = async () => {
  const mealTypes = await getMealTypes();

  return (
    <div className={`${styles.meals} container`}>
      <h1>Different recipes for every type of meal</h1>
      <p>Browse recipes now:</p>
      <div className={styles.meal_categories}>
        {mealTypes.map((meal: MealProps) => {
          return <CategoryTag name={meal.name} link={meal.name} />;
        })}
      </div>
    </div>
  );
};
export default MealsContainer;
