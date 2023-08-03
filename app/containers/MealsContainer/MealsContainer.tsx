import "./MealsContainer.module.scss";
import { getMealTypes } from "@/app/lib/posts";
import CategoryTag from "@/app/components/CategoryTag/CategoryTag";
import styles from "./MealsContainer.module.scss";

type MealProps = {
  id: string;
  name: string;
  slug: string;
  count?: number;
};
const MealsContainer = async () => {
  const mealTypes = await getMealTypes();

  return (
    <div className={`${styles.meals} container`}>
      <h1>Different recipes for every meal type</h1>
      <p>Browse your favorite recipes now:</p>
      <div className={styles.meal_categories}>
        {mealTypes?.map((meal: MealProps) => {
          return (
            <CategoryTag
              name={meal.name}
              link={`/recipes/meal-types/${meal.slug}`}
            />
          );
        })}
      </div>
    </div>
  );
};
export default MealsContainer;
