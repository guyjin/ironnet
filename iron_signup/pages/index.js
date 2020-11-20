import Header from "../components/header";
import Link from "next/link";
import styles from "../styles/main.module.scss";

function Index() {
  return (
    <div>
      <Header headerText="Sign In" instructionText="" />
      <form name="signInForm" id="signInForm" className="forms">
        <input type="email" name="eMail" id="email" placeholder="Email" />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        <input type="submit" value="Sign In" />
        <div className="smallText helpText">
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
