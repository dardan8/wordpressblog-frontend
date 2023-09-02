import React from "react";
import GetAllPosts from "../components/GetAllPosts";
import { getAllRecipes } from "../lib/recipeRequests";
import BlogOverviewHeader from "../containers/BlogOverviewHeader/BlogOverviewHeader";

export default async function Page() {
  const allRec = await getAllRecipes(null);
  return (
    <>
      <BlogOverviewHeader
        title='A selection of recipes for all our readers'
        subtitle='Straight to the point and delicious'
      />
      <div className='recipe_posts'>
        <GetAllPosts recipes={allRec} />
      </div>
    </>
  );
}
