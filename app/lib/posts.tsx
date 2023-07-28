import graphqlRequest from "./graphqlRequest";

export async function getAllRecipes(endCursor = null) {
  const condition = `after: "${endCursor}" first: 6`;

  const query = {
    query: `
        {
          recipes (${condition}){
            nodes {
              date
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
            pageInfo {
              endCursor
              hasNextPage
              hasPreviousPage
              startCursor
            }
          }        
       }
     `,
  };
  const resJson = await graphqlRequest(query);
  const allRecipes = resJson?.data?.recipes;
  return allRecipes;
}

export async function getFeaturedPosts() {
  const query = {
    query: `
        {
          recipes(where: {tag: "Featured"}) {
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
          }       }
     `,
  };
  const resJson = await graphqlRequest(query);
  const featured = resJson?.data?.recipes?.nodes;
  return featured;
}

export async function getLastThreePosts() {
  const query = {
    query: `
        {
          recipes(first: 3) {
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
  const result = resJson?.data?.recipes?.nodes;
  return result;
}

export async function getSinglePost(slug: string) {
  const query = {
    query: `
    query getSinglePost {
      recipe(idType: URI, id: "${slug}") {
        date
        title(format: RENDERED)
        excerpt
        featuredImage {
          node {
            altText
            caption(format: RAW)
            description
            mediaItemUrl
          }
        }
        cookingMethods {
          nodes {
            name
          }
        }
        mealTypes {
          nodes {
            name
          }
        }
        recipeAuthor(format: RAW)
        recipeIngredients(format: RAW)
        recipeInstructions(format: RAW)
        diets {
          nodes {
            name
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

export async function getMealTypes() {
  const query = {
    query: `
     {
      mealTypes {
        nodes {
          id
          name
        }
      }
    }
     `,
  };
  const resJson = await graphqlRequest(query);
  const response = resJson?.data?.mealTypes?.nodes;
  return response;
}
