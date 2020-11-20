import Link from "next/link";
import Header from "../components/header";
function Reset() {
  return (
    <div>
      <Header
        headerText="Reset Password"
        instructionText="Enter your registered email in order to receive password reset instructions"
      />
      <form name="resetByEmail" id="resetByEmail" className="forms">
        <input
          type="email"
          name="emailAddr"
          id="emailAddr"
          placeholder="Email"
          required
        />
        <input type="submit" value="Reset Password" />
        <div className="smallText helpText">
          Didn't mean to click that?&nbsp;
          <Link href="/">
            <a>Sign in.</a>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Reset;
