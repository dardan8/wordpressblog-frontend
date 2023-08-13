import styles from "./page.module.css";
import BlogOverviewHeader from "./containers/BlogOverviewHeader/BlogOverviewHeader";
import FeaturedContainer from "./containers/FeaturedContainer/FeaturedContainer";
import RecentsContainer from "./containers/RecentsContainer/RecentsContainer";
import MealsContainer from "./containers/MealsContainer/MealsContainer";
import VeganRecipeContainer from "./containers/VeganRecipeContainer/VeganRecipeContainer";
import MediterraneanRecipeContainer from "./containers/MediterraneanRecipeContainer/MediterraneanRecipeContainer";
import SubscribeContainer from "./containers/SubscribeContainer/SubscribeContainer";
import Button from "./components/Button/Button";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <BlogOverviewHeader
        title='Welcome to the Headless Recipe Blog'
        subtitle='Delicious meals for every taste'
      >
        <Link href='/recipes'>
          <Button placeholder='View all recipes' />
        </Link>
      </BlogOverviewHeader>
      <FeaturedContainer />
      <RecentsContainer />
      <MealsContainer />
      <VeganRecipeContainer />
      <MediterraneanRecipeContainer />
      <SubscribeContainer />
    </main>
  );
}
