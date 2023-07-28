import React, { useState } from "react";
import GetAllPosts from "../components/GetAllPosts";
import { RecipeProps } from "../types";
import { getAllRecipes } from "../lib/posts";
import LoadMoreButton from "../components/LoadMoreButton/LoadMoreButton";

export default async function Page() {
  const allRecipes = await getAllRecipes();

  return (
    <div className='recipe_posts'>
      <GetAllPosts recipes={allRecipes} />
    </div>
  );
}
