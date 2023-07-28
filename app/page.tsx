import styles from "./page.module.css";
import BlogOverviewHeader from "./containers/BlogOverviewHeader/BlogOverviewHeader";
import FeaturedContainer from "./containers/FeaturedContainer/FeaturedContainer";
import RecentsContainer from "./containers/RecentsContainer/RecentsContainer";
import MealsContainer from "./containers/MealsContainer/MealsContainer";
import VeganRecipeContainer from "./containers/VeganRecipeContainer/VeganRecipeContainer";
import MediterraneanRecipeContainer from "./containers/MediterraneanRecipeContainer/MediterraneanRecipeContainer";
import SubscribeContainer from "./containers/SubscribeContainer/SubscribeContainer";

export default function Home() {
  return (
    <main className={styles.main}>
      <BlogOverviewHeader />
      <FeaturedContainer />
      <RecentsContainer />
      <MealsContainer />
      <VeganRecipeContainer />
      <MediterraneanRecipeContainer />
      <SubscribeContainer />
    </main>
  );
}
