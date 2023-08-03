import React from "react";
import { getMealTypes } from "@/app/lib/posts";
import styles from "./page.module.scss";
import CategoryTag from "@/app/components/CategoryTag/CategoryTag";

type MealProps = {
  id: string;
  name: string;
};

const page = async () => {
  const mealTypes = await getMealTypes();

  return (
    <div className={`${styles.meals_section} container`}>
      <h1>Browse recipes by meal mealTypes</h1>
      <div className={styles.meal_categories}>
        {mealTypes.map((meal: MealProps) => {
          return (
            <CategoryTag
              name={meal.name}
              link={`/recipes/meal-types/${meal.name.toLowerCase()}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default page;
