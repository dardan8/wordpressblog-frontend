import React from "react";
import styles from "./RecentsContainer.module.scss";
import BlogCard from "@/app/components/BlogCard/BlogCard";
import { getLastThreePosts } from "../../lib/posts";
import { RecipeProps } from "@/app/types";

const RecentsContainer = async () => {
  const recipes = await getLastThreePosts();

  return (
    <div className={`${styles.recentscontainer} container`}>
      <div className={styles.titleswrapper}>
        <h1>Recent Recipes</h1>
        <p>Recently published posts</p>
      </div>
      <div className={styles.recipeswrapper}>
        {recipes.map((recipe: RecipeProps) => {
          return (
            <BlogCard
              featuredImage={recipe.featuredImage.node.mediaItemUrl}
              slug={recipe.slug}
              title={recipe.title}
              excerpt={recipe.excerpt}
              key={recipe.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RecentsContainer;
