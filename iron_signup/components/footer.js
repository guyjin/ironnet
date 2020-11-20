import styles from "./layout.module.scss";
function Footer() {
  return (
    <div className={`smallText ${styles.footer}`}>
      <span>&copy; Copyright ACME 2020</span>
    </div>
  );
}

export default Footer;
