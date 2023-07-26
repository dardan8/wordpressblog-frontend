import BlogCard from "@/app/components/BlogCard/BlogCard";
import LargeBlogCard from "@/app/components/BlogCard/LargeBlogCard";

import React from "react";
import styles from "./MediterraneanRecipeContainer.module.scss";
import { getFeaturedPosts } from "@/app/lib/posts";
import { RecipeProps } from "@/app/types";
import HorizontalCard from "@/app/components/BlogCard/HorizontalCard";

const MediterraneanRecipeContainer = async () => {
  const featuredRecipes = await getFeaturedPosts();

  return (
    <div className={`${styles.med_wrapper} container`}>
      <div className={styles.textwrapper}>
        <h1>Mediterranean Dishes ☀️</h1>
        <p>A selection of delicious and healthy mediterranean recipes</p>
      </div>
      <div className={styles.recipecards}>
        {featuredRecipes.map((recipe: RecipeProps) => {
          return (
            <HorizontalCard
              featuredImage={recipe.featuredImage.node.mediaItemUrl}
              slug={recipe.slug}
              title={recipe.title}
              key={recipe.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MediterraneanRecipeContainer;
