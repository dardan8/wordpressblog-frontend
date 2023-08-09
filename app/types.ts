export type RecipeProps = {
  date: string;
  id: string;
  title: string;
  slug: string;
  recipeAuthor: string;
  recipeIngredients: string;
  recipeInstructions: string;
  link: string;
  recipeYield: string;
  recipePrepationTime: string;
  cookingMethods: {
    nodes: {
      name: string;
    }[];
  };
  featuredImage: {
    node: {
      description: string;
      altText: string;
      caption: string;
      mediaItemUrl: string;
    };
  };
  excerpt: string;
  pageInfo: {
    endCursor: string;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor: string;
  };
};

export type RecipeRes = {
  data: {
    recipes: {
      nodes: [
        {
          id: string;
          title: string;
          slug: string;
          recipeAuthor: string;
          recipeIngredients: string;
          recipeInstructions: string;
          link: string;
          featuredImage: {
            node: {
              description: string;
              altText: string;
              caption: string;
              mediaItemUrl: string;
            };
          };
        }
      ];
    };
  };
};
