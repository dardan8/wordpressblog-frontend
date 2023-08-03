"use client";

import { getMealTypes } from "@/app/lib/posts";
import { getRecipesByTaxonomy } from "@/app/lib/posts";

import GetAllPosts from "@/app/components/GetAllPosts";
import BlogCard from "@/app/components/BlogCard/BlogCard";

import styles from "./page.module.scss";
type Params = {
  params: {
    mealtype: string;
  };
};

const page = async ({ params }: Params) => {
  let slugpage = params.mealtype;
  const recipes = await getRecipesByTaxonomy({ slug: slugpage });

  const selectedRecipes = recipes;
  console.log(selectedRecipes);

  return (
    <div>
      <h1>Meal Type </h1>
      <p>{params.mealtype}</p>
      <div className={styles.recipe_area}>
        {selectedRecipes?.map((recipe: any) => (
          <BlogCard
            featuredImage={recipe.featuredImage.node.mediaItemUrl}
            slug={recipe.slug}
            title={recipe.title}
            excerpt={recipe.excerpt}
            key={recipe.id}
          />
        ))}
      </div>
    </div>
  );
};

export async function generateStaticParams() {
  const mealtypes = await getMealTypes();

  return mealtypes.map((meal: any) => ({
    mealType: meal.slug,
  }));
}

export default page;
