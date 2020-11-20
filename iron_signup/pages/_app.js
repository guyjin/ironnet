import React, { createContext, useState } from "react";
import "../styles/globals.scss";
import Footer from "../components/footer";
import Layout from "../components/layout";
import { UserContext } from "../components/context/UserContext";

function MyApp({ Component, pageProps }) {
  const [resetInstructionsSent, setResetInstructionsSent] = useState(false);
  return (
    <>
      <div className="app">
        <Layout>
          <div className="mainContent">
            <UserContext.Provider
              value={{ resetInstructionsSent, setResetInstructionsSent }}
            >
              <Component {...pageProps} />
            </UserContext.Provider>
            <Footer />
          </div>
        </Layout>
      </div>
    </>
  );
}

export default MyApp;
