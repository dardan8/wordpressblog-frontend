"use client";
import BlogCard from "./BlogCard/BlogCard";
import styles from "./GetAllPosts.module.scss";
import { RecipeProps } from "../types";

export default function GetAllPosts({ recipePosts }: any) {
  const API_URL = process.env.NEXT_PUBLIC_WP_API_ENDPOINT;

  return (
    <div className={styles.recipe_area}>
      {recipePosts?.map((recipe: RecipeProps) => (
        <BlogCard
          featuredImage={recipe.featuredImage.node.mediaItemUrl}
          slug={recipe.slug}
          title={recipe.title}
          excerpt={recipe.excerpt}
          key={recipe.id}
        />
      ))}
    </div>
  );
}
