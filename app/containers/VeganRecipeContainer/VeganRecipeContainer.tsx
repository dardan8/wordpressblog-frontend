import BlogCard from "@/app/components/BlogCard/BlogCard";
import styles from "./VeganRecipeContainer.module.scss";
import { getFeaturedPosts } from "@/app/lib/posts";
import { RecipeProps } from "@/app/types";

const VeganRecipeContainer = async () => {
  const featuredRecipes = await getFeaturedPosts();

  return (
    <div className={`${styles.meals} container`}>
      <div className={styles.textwrapper}>
        <h1>Vegan Recipes</h1>
        <p>Check out out vegan recipes now</p>
      </div>
      <div className={styles.meals2}>
        <div className={styles.featuredone}>
          <BlogCard
            featuredImage={featuredRecipes[0].featuredImage.node.mediaItemUrl}
            slug={featuredRecipes[0].slug}
            title={featuredRecipes[0].title}
            excerpt={featuredRecipes[0].excerpt}
            key={featuredRecipes[0].id}
          />
        </div>
        <div className={styles.featuredtwo}>
          {featuredRecipes.map((recipe: RecipeProps) => {
            return (
              <BlogCard
                featuredImage={recipe.featuredImage.node.mediaItemUrl}
                slug={recipe.slug}
                title={recipe.title}
                excerpt={recipe.excerpt}
                key={recipe.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default VeganRecipeContainer;
