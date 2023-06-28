import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        NEXTJS BLOG
        <Link href={"/recipes"}>
          <p>Go to recipes</p>
        </Link>
      </div>
    </main>
  );
}
