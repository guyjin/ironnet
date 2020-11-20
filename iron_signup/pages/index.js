import Header from "../components/header";
import Link from "next/link";
import styles from "../styles/index.module.scss";

function Index() {
  return (
    <div>
      <Header headerText="Sign In" instructionText="Help!" />
      <form name="signInForm" id="signInForm">
        <input type="email" name="eMail" id="email" />
        <input type="password" name="password" id="password" />
        <input type="submit" value="Sign In" />
        <div className="helpText">
          Forgot your password?{" "}
          <Link href="reset">
            <a>Reset it here.</a>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Index;
