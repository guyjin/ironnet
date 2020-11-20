import styles from "./layout.module.scss";
import bannerstyles from "./banner.module.scss";

//TODO: pull all text out into config files.

function Banner() {
  return (
    <>
      <div className={`banner ${styles.bannerLayout} ${bannerstyles.banner}`}>
        <div className={bannerstyles.logo}>
          <div className={bannerstyles.qube}></div>
          <h3>ACME</h3>
        </div>
        <h1 className={bannerstyles.coa}>
          Sign in and start saving your time today.
        </h1>
        <h5>
          We provide 24/7 support with our highly dedicated professional team.
        </h5>
      </div>
    </>
  );
}

export default Banner;
