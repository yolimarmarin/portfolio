import "../styles/globals.css";
import "react-vertical-timeline-component/style.min.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
