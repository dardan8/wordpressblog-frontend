import React from "react";
import { getMealTypes } from "@/app/lib/recipeRequests";
import styles from "./page.module.scss";
import CategoryTag from "@/app/components/CategoryTag/CategoryTag";
import BlogOverviewHeader from "@/app/containers/BlogOverviewHeader/BlogOverviewHeader";

type MealProps = {
  id: string;
  name: string;
  slug: string;
  count?: number;
};

const page = async () => {
  const mealTypes = await getMealTypes();

  return (
    <>
      <BlogOverviewHeader title='Browse recipes by meal types' />
      <div className={`${styles.meals_section} container`}>
        <div className={styles.meal_categories}>
          {mealTypes?.map((meal: MealProps) => {
            return (
              <CategoryTag
                name={meal.name + ` (${meal.count})`}
                link={`/recipes/meal-types/${meal.slug}`}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default page;
