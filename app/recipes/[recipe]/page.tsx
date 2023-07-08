import React from "react";
import { getSinglePost } from "@/app/lib/posts";
import Header from "@/app/components/Header/Header";
import Instructions from "@/app/components/Instructions/Instructions";

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
      />
      <Instructions instructions={singleRecipe.recipeInstructions} />
    </div>
  );
}
