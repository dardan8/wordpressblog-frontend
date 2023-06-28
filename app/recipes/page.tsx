import React from "react";
import GetAllPosts from "../components/GetAllPosts";
import { RecipeProps } from "../types";

export default async function Page() {
  const res = await fetch("http://localhost:8000/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAiLCJpYXQiOjE2ODc2MDg0ODEsIm5iZiI6MTY4NzYwODQ4MSwiZXhwIjoxNzE5MTQ0NDgxLCJkYXRhIjp7InVzZXIiOnsiaWQiOiIxIiwidXNlcl9zZWNyZXQiOiJncmFwaHFsX2p3dF82NDk2ZGNhMTdiYWM1In19fQ.2ev94eOKJZXAxhM89WGR6r7UxK5cguLsy5JZdbDpDzY",
    },
    body: JSON.stringify({
      query: `
       {
        recipes {
          nodes {
            id
            title
            slug
            recipeAuthor
            recipeIngredients
            recipeInstructions
            link
            featuredImage {
              node {
                description
                altText
                caption
                mediaItemUrl
              }
            }
            excerpt(format: RAW)
          }
        }
      }
    `,
    }),
    next: { revalidate: 1000 },
  }).then((res) => res.json());

  const recipes: RecipeProps = res?.data?.recipes?.nodes;
  console.log(res?.data?.recipes);

  return (
    <div className='recipe_posts'>
      <GetAllPosts recipePosts={recipes} />
    </div>
  );
}
