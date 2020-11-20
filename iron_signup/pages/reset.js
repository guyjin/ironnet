import { useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { UserContext } from "../components/context/UserContext";
import Header from "../components/header";
function Reset() {
  const { resetInstructionsSent, setResetInstructionsSent } = useContext(
    UserContext
  );

  const router = useRouter();

  const sendInstructions = (e) => {
    e.preventDefault();
    setResetInstructionsSent(true);
    router.push("/");
  };
  return (
    <div>
      <Header
        headerText="Reset Password"
        instructionText="Enter your registered email in order to receive password reset instructions"
      />

      <form
        name="resetByEmail"
        id="resetByEmail"
        className="forms"
        onSubmit={sendInstructions}
      >
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
