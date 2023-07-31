import styles from "./NavigationMenu.module.scss";
import Link from "next/link";

const NavigationMenu = () => {
  return (
    <div className={styles.navigation}>
      <h1>
        <Link href='/'>LOGO</Link>
      </h1>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/recipes'>All Recipes</Link>
        </li>
        <li>
          <Link href='/subscribe'>Subscribe Now</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavigationMenu;
