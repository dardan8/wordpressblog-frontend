import { getMealTypes, getSingleRecipe } from "@/app/lib/recipeRequests";
import { getRecipesByTaxonomy } from "@/app/lib/recipeRequests";
import BlogCard from "@/app/components/BlogCard/BlogCard";
import styles from "./page.module.scss";
import BlogOverviewHeader from "@/app/containers/BlogOverviewHeader/BlogOverviewHeader";
import NoRecipes from "@/app/components/NoRecipes/NoRecipes";
import Link from "next/link";
type Params = {
  params: {
    mealtype: string;
  };
};

const page = async ({ params }: Params) => {
  let slugpage = params.mealtype;
  const recipes = await getRecipesByTaxonomy({
    slug: slugpage,
    taxonomy: "mealtypes",
    first: 6,
  });

  const selectedRecipes = recipes;
  console.log("The length is " + selectedRecipes.length);
  return (
    <div>
      <BlogOverviewHeader title={`Browse our ${params.mealtype} recipes now`}>
        <Link href='/recipes/meal-types'>
          <p>Go back to meal types</p>
        </Link>
      </BlogOverviewHeader>
      {selectedRecipes.length > 0 ? (
        <div className={`${styles.recipe_area} container`}>
          {selectedRecipes?.map((recipe: any) => (
            <BlogCard
              featuredImage={recipe.featuredImage.node.mediaItemUrl}
              slug={recipe.slug}
              title={recipe.title}
              excerpt={recipe.excerpt}
              key={recipe.id}
              cookingTime={recipe.recipePrepationTime}
              servings={recipe.recipeYield}
              cookingMethod={recipe.cookingMethods.nodes[0].name}
            />
          ))}
        </div>
      ) : (
        <div className='container'>
          <NoRecipes />
        </div>
      )}
    </div>
  );
};

export async function generateStaticParams() {
  const mealtypes = await getMealTypes();

  return mealtypes.map((meal: any) => ({
    mealType: meal.slug,
  }));
}

export default page;
