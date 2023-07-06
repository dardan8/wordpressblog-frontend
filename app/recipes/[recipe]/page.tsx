import React from "react";
import { getSinglePost } from "@/app/lib/posts";

export default async function Page({ params }: { params: { recipe: string } }) {
  const singleRecipe = await getSinglePost(params.recipe);
  console.log(singleRecipe);
  return (
    <div>
      Single Recipe
      <p> {params.recipe} </p>
      <p>{singleRecipe.date}</p>
      <p>
        <img src={singleRecipe.featuredImage.node.mediaItemUrl}></img>
      </p>
    </div>
  );
}
