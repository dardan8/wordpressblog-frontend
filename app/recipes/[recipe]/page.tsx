import { getSingleRecipe } from "@/app/lib/posts";
import Header from "@/app/components/Header/Header";
import Instructions from "@/app/components/Instructions/Instructions";
import Ingredients from "@/app/components/Ingredients/Ingredients";
import RecipeAttributes from "@/app/components/RecipeAttributes/RecipeAttributes";

export default async function Page({ params }: { params: { recipe: string } }) {
  const singleRecipe = await getSingleRecipe(params.recipe);

  return (
    <div className='pagelayout'>
      <Header
        title={singleRecipe?.title}
        excerpt={singleRecipe.excerpt}
        imageUrl={singleRecipe.featuredImage.node.mediaItemUrl}
        date={singleRecipe.date}
        mealType={singleRecipe.diets.nodes[0].name}
        authorName={singleRecipe.recipeAuthor}
        authorImage={singleRecipe.authorImage.node.mediaItemUrl}
      />
      <div className='blog_container'>
        <RecipeAttributes
          cookingTime={singleRecipe.recipePrepationTime}
          recipeYield={singleRecipe.recipeYield}
          cookingMethod={singleRecipe.cookingMethods.nodes[0].name}
        />
        <p>{singleRecipe.recipeIntroduction}</p>
        <h3>Ingredients:</h3>
        <Ingredients ingredients={singleRecipe.recipeIngredients} />
        <h3>Instructions:</h3>
        <Instructions instructions={singleRecipe.recipeInstructions} />
      </div>
    </div>
  );
}
