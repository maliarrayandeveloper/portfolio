import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.left}>
          © {year} <span>Muhammad Ali Arrayyan Bukhori</span>. Built with React
          & Vite.
        </p>
        <p className={styles.right}>Open to remote work · Worldwide</p>
      </div>
    </footer>
  );
}
