"use client";
import BlogCard from "./BlogCard/BlogCard";
import styles from "./GetAllPosts.module.scss";
import { RecipeProps } from "../types";
import LoadMoreButton from "./LoadMoreButton/LoadMoreButton";
import { useState } from "react";

export default function GetAllPosts({ recipes }: any) {
  const [allRecipes, setAllRecipes] = useState(recipes);

  return (
    <div className={styles.blog_recipes}>
      <div className={styles.recipe_area}>
        {allRecipes?.nodes?.map((recipe: RecipeProps) => (
          <BlogCard
            featuredImage={recipe.featuredImage.node.mediaItemUrl}
            slug={recipe.slug}
            title={recipe.title}
            excerpt={recipe.excerpt}
            key={recipe.id}
            cookingTime={recipe.recipePrepationTime}
            servings={recipe.recipeYield}
            cookingMethod={recipe.cookingMethods.nodes[0].name}
          />
        ))}
      </div>

      <div className={styles.loadmore_button}>
        <LoadMoreButton recipes={allRecipes} setRecipes={setAllRecipes} />
      </div>
    </div>
  );
}
