import styles from "./page.module.css";
import BlogOverviewHeader from "./containers/BlogOverviewHeader/BlogOverviewHeader";
import FeaturedContainer from "./containers/FeaturedContainer/FeaturedContainer";
import RecentsContainer from "./containers/RecentsContainer/RecentsContainer";
import MealsContainer from "./containers/MealsContainer/MealsContainer";
import VeganRecipeContainer from "./containers/VeganRecipeContainer/VeganRecipeContainer";

export default function Home() {
  return (
    <main className={styles.main}>
      <BlogOverviewHeader />
      <FeaturedContainer />
      <RecentsContainer />
      <MealsContainer />
      <VeganRecipeContainer />
    </main>
  );
}
