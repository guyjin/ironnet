import styles from "./header.module.scss";

function Header({ headerText, instructionText }) {
  return (
    <div className={styles.header}>
      <h3 className={styles.headerText}>{headerText}</h3>
      <div className={`smallText ${styles.headerInstructionText}`}>
        {instructionText}
      </div>
      <hr className={styles.blip} />
    </div>
  );
}

export default Header;
