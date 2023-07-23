import React from "react";
import { getSinglePost } from "@/app/lib/posts";
import Header from "@/app/components/Header/Header";
import Instructions from "@/app/components/Instructions/Instructions";
import Ingredients from "@/app/components/Ingredients/Ingredients";

export default async function Page({ params }: { params: { recipe: string } }) {
  const singleRecipe = await getSinglePost(params.recipe);
  console.log(singleRecipe);

  return (
    <div className='pagelayout'>
      <Header
        title={singleRecipe.title}
        excerpt={singleRecipe.excerpt}
        imageUrl={singleRecipe.featuredImage.node.mediaItemUrl}
        date={singleRecipe.date}
        mealType={singleRecipe.diets.nodes[0].name}
      />
      <Instructions instructions={singleRecipe.recipeInstructions} />
      <Ingredients ingredients={singleRecipe.recipeIngredients} />
    </div>
  );
}
