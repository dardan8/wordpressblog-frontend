import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer_container}>
      <div>
        <p>About</p>
        <p>Privacy Policy</p>
      </div>
      <div className={styles.footer_second}>
        <h3>LOGO</h3>
        <p> (C) 2023 Headless CMS Blog</p>
      </div>
      <div>
        <p>Get in touch</p>
      </div>
    </footer>
  );
};

export default Footer;
