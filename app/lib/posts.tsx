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
        recipeIngredients(format: RENDERED)
        recipeInstructions(format: RENDERED)
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
