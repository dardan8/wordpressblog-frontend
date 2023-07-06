import React from "react";
import GetAllPosts from "../components/GetAllPosts";
import { RecipeProps } from "../types";
import { getAllPosts } from "../lib/posts";

export default async function Page() {
  const recipes = await getAllPosts();

  return (
    <div className='recipe_posts'>
      <GetAllPosts recipePosts={recipes} />
    </div>
  );
}
