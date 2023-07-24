import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import BlogOverviewHeader from "./components/BlogOverviewHeader/BlogOverviewHeader";
import FeaturedContainer from "./containers/FeaturedContainer/FeaturedContainer";
import RecentsContainer from "./containers/RecentsContainer/RecentsContainer";

export default function Home() {
  return (
    <main className={styles.main}>
      <BlogOverviewHeader />
      <FeaturedContainer />
      <RecentsContainer />
    </main>
  );
}
