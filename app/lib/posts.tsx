import graphqlRequest from "./graphqlRequest";

export async function getAllPosts() {
  const query = {
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
  };
  const resJson = await graphqlRequest(query);
  const allPosts = resJson?.data?.recipes?.nodes;
  return allPosts;
}

export async function getSinglePost(slug: string) {
  const query = {
    query: `
    query getSinglePost {
      recipe(idType: URI, id: "${slug}") {
        content(format: RAW)
        date
        title(format: RAW)
        excerpt
        featuredImage {
          node {
            altText
            caption(format: RAW)
            description
            mediaItemUrl
          }
        }
        mealTypes {
          nodes {
            children {
              edges {
                node {
                  id
                }
              }
            }
            name
            taxonomyName
          }
        }
        terms {
          nodes {
            ... on Cooking_method {
              id
              name
            }
            ... on Diet {
              id
              name
            }
            ... on Meal_type {
              id
              name
            }
          }
        }
      }
    }
    `,
  };

  const resJson = await graphqlRequest(query);
  const singlePost = resJson?.data?.recipe;
  return singlePost;
}
