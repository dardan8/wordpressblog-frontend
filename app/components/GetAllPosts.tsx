"use client";
import BlogCard from "./BlogCard/BlogCard";
import styles from "./GetAllPosts.module.scss";
import { RecipeProps } from "../types";

export default function GetAllPosts({ recipePosts }: any) {
  const API_URL = process.env.NEXT_PUBLIC_WP_API_ENDPOINT;

  // const { data } = await fetch("http://localhost:8000/graphql", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization:
  //       "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAiLCJpYXQiOjE2ODc2MDg0ODEsIm5iZiI6MTY4NzYwODQ4MSwiZXhwIjoxNzE5MTQ0NDgxLCJkYXRhIjp7InVzZXIiOnsiaWQiOiIxIiwidXNlcl9zZWNyZXQiOiJncmFwaHFsX2p3dF82NDk2ZGNhMTdiYWM1In19fQ.2ev94eOKJZXAxhM89WGR6r7UxK5cguLsy5JZdbDpDzY",
  //   },
  //   body: JSON.stringify({
  //     query: `
  //      {
  //       recipes {
  //         nodes {
  //           id
  //           title
  //           slug
  //           recipeAuthor
  //           recipeIngredients
  //           recipeInstructions
  //           link
  //           featuredImage {
  //             node {
  //               description
  //               altText
  //               caption
  //               mediaItemUrl
  //             }
  //           }
  //           excerpt(format: RAW)
  //         }
  //       }
  //     }
  //   `,
  //   }),
  //   next: { revalidate: 10 },
  // }).then((res) => res.json());

  // let blogPosts = data?.recipes?.nodes;

  // console.log(blogPosts);

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
