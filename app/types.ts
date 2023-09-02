export type RecipeSingle = {
  cookingMethods: {
    nodes: {
      name: string;
    }[];
  };
  date: string;
  excerpt: string;
  featuredImage: {
    node: {
      description: string;
      altText: string;
      caption: string;
      mediaItemUrl: string;
    };
  };
  id: string;
  link: string;
  recipeAuthor: string;
  recipeIngredients: string;
  recipeInstructions: string;
  recipePrepationTime: string;
  recipeYield: string;
  slug: string;
  title: string;
};

export type RecipeRes = {
  nodes: {
    cookingMethods: {
      nodes: {
        name: string;
      }[];
    };
    date: string;
    excerpt: string;
    featuredImage: {
      node: {
        description: string;
        altText: string;
        caption: string;
        mediaItemUrl: string;
      };
    };
    id: string;
    link: string;
    recipeAuthor: string;
    recipeIngredients: string;
    recipeInstructions: string;
    recipePrepationTime: string;
    recipeYield: string;
    slug: string;
    title: string;
  }[];
  pageInfo: {
    endCursor?: null | string;
    hasNextPage?: null | string;
    hasPreviousPage?: null | string;
    startCursor?: null | string;
  };
};

export type RecipeProps = {
  date?: string;
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
};
