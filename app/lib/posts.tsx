import graphqlRequest from "./graphqlRequest";

//Query to retrieve all the recipes

export async function getAllRecipes(endCursor = null) {
  let condition = `after: "${endCursor}" first: 6`;

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

//Query to retrieve Recipes by  taxonomy

interface getRecipes {
  endCursor?: null;
  slug: string;
}

export async function getRecipesByTaxonomy({ endCursor, slug }: getRecipes) {
  const condition = `after: "${endCursor}" first: 6`;

  const query = {
    query: `
        {
          mealtypes(where: {slug: "${slug}"}) {
            edges {
              node {
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
            }
          }
       }
     `,
  };
  const resJson = await graphqlRequest(query);
  const allRecipes = resJson?.data?.mealtypes?.edges[0].node.recipes.nodes;
  return allRecipes;
}

//Query to retrieve all the featured Recipes
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
              cookingMethods {
                nodes {
                  name
                }
              }
              recipePrepationTime
              recipeYield
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

//Query to retrieve a single Recipe

export async function getSingleRecipe(slug: string) {
  const query = {
    query: `
     {
      recipe(idType: URI, id: "${slug}") {
        date
        title(format: RENDERED)
        excerpt(format: RAW)
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
        mealtypes {
          nodes {
            name
          }
        }
        diets {
          nodes {
            name
          }
        }
        recipeAuthor(format: RAW)
        authorImage {
          node {
            mediaItemUrl
          }
        }
        recipeIngredients(format: RENDERED)
        recipeInstructions(format: RAW)
        recipeIntroduction(format: RAW)
        recipePrepationTime
        recipeYield
      }
    }
    `,
  };

  const resJson = await graphqlRequest(query);
  const singleRecipe = resJson?.data?.recipe;
  return singleRecipe;
}

export async function getMealTypes() {
  const query = {
    query: `
     {
      mealtypes {
        nodes {
          id
          name
          slug
          count
        }
      }
    }
     `,
  };
  const resJson = await graphqlRequest(query);
  const response = resJson?.data?.mealtypes?.nodes;
  return response;
}
