import React from "react";
import styles from "./MediterraneanRecipeContainer.module.scss";
import { getRecipesByTaxonomy } from "@/app/lib/recipeRequests";
import { RecipeProps } from "@/app/types";
import HorizontalCard from "@/app/components/BlogCard/HorizontalCard";

const MediterraneanRecipeContainer = async () => {
  const featuredRecipes = await getRecipesByTaxonomy({
    taxonomy: "diets",
    slug: "mediterranean",
    first: 3,
  });

  return (
    <div className={`${styles.med_wrapper} container`}>
      <div className={styles.textwrapper}>
        <h1>Mediterranean Dishes ☀️</h1>
        <p>A selection of delicious and healthy mediterranean recipes</p>
      </div>
      <div className={styles.recipecards}>
        {featuredRecipes?.map((recipe: RecipeProps) => {
          return (
            <HorizontalCard
              featuredImage={recipe.featuredImage.node.mediaItemUrl}
              slug={recipe.slug}
              title={recipe.title}
              key={recipe.id}
              servings={recipe.recipeYield}
              cookingTime={recipe.recipePrepationTime}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MediterraneanRecipeContainer;
