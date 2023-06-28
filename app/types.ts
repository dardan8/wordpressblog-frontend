export type RecipeProps = {
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
  excerpt: string;
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
