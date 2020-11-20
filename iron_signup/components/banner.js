import styles from "./layout.module.scss";
function Banner() {
  return (
    <>
      <div className={`banner ${styles.banner}`}>
        <div className="logo">
          <div className="logoQube"></div>
          ACME
        </div>
        Sign in and start saving your time today.
        <div className="tagLine">
          We provide 24/7/support with our highly dedicated professional team.
        </div>
      </div>
    </>
  );
}

export default Banner;
