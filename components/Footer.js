import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img src="/running_grey.gif" width="50" height="60" />
        Made by Hector{" "}
        <img
          src="/netliheart.svg"
          alt="Netlify Logo"
          className={styles.logo}
        />{" "}
        for you
        <img src="/running_grey.gif" width="50" height="60" />
      </footer>
    </>
  );
}
