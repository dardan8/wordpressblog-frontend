import HorizontalCard from "@/app/components/BlogCard/HorizontalCard";
import BlogCard from "@/app/components/BlogCard/BlogCard";

import styles from "./VeganRecipeContainer.module.scss";
import { getFeaturedPosts } from "@/app/lib/posts";
import { RecipeProps } from "@/app/types";

const VeganRecipeContainer = async () => {
  const featuredRecipes = await getFeaturedPosts();

  return (
    <div className={`${styles.meals} container`}>
      <div className={styles.textwrapper}>
        <h1>Vegan Recipes 🌱</h1>
        <p>Check out out vegan recipes now</p>
      </div>
      <div className={styles.meals2}>
        <div className={styles.featured_left}>
          <BlogCard
            featuredImage={featuredRecipes[0].featuredImage.node.mediaItemUrl}
            slug={featuredRecipes[0].slug}
            title={featuredRecipes[0].title}
            excerpt={featuredRecipes[0].excerpt}
            key={featuredRecipes[0].id}
            cookingTime={featuredRecipes[0].recipePrepationTime}
            servings={featuredRecipes[0].recipePrepationTime}
            cookingMethod={featuredRecipes[0]}
          />
        </div>
        <div className={styles.featured_right}>
          {featuredRecipes.slice(1, 3).map((recipe: RecipeProps) => {
            return (
              <HorizontalCard
                featuredImage={recipe.featuredImage.node.mediaItemUrl}
                slug={recipe.slug}
                title={recipe.title}
                key={recipe.id}
                cookingTime={recipe.recipePrepationTime}
                servings={recipe.recipeYield}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default VeganRecipeContainer;
