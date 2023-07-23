import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import BlogOverviewHeader from "./components/BlogOverviewHeader/BlogOverviewHeader";

export default function Home() {
  return (
    <main className={styles.main}>
      <BlogOverviewHeader />
    </main>
  );
}
