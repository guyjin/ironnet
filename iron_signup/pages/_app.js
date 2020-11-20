import "../styles/globals.scss";
import Footer from "../components/footer";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="app">
        <Layout>
          <div className="mainContent">
            <Component {...pageProps} />
            <Footer />
          </div>
        </Layout>
      </div>
    </>
  );
}

export default MyApp;
