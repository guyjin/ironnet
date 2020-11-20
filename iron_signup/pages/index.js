import React, { useContext } from "react";
import Header from "../components/header";
import { UserContext } from "../components/context/UserContext";
import Link from "next/link";

function Index() {
  const { resetInstructionsSent, setResetInstructionsSent } = useContext(
    UserContext
  );
  return (
    <div>
      <Header headerText="Sign In" instructionText="" />
      <form name="signInForm" id="signInForm" className="forms">
        <input
          type="email"
          name="eMail"
          id="email"
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          required
        />
        <input
          type="submit"
          value="Sign In"
          onClick={(e) => e.preventDefault()}
        />
        <div className="smallText helpText">
          Forgot your password?{" "}
          <Link href="reset">
            <a>Reset it here.</a>
          </Link>
        </div>
      </form>
      {resetInstructionsSent && (
        <div className="notification">
          <div className="statusIcon">👍</div>
          <div className="notificationText smallText">
            Password reset instructions have been sent.
          </div>
        </div>
      )}
    </div>
  );
}

export default Index;
