import Header from "../components/header";
function Reset() {
  return (
    <div>
      <Header
        headerText="Reset Password"
        instructionText="Enter your registered email in order to receive password reset instructions"
      />
      <form name="resetByEmail" id="resetByEmail">
        <input type="emailAddr" name="emailAddr" id="email" />
        <input type="submit" value="Reset Password" />
      </form>
    </div>
  );
}

export default Reset;
