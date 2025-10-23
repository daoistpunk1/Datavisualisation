import "../styles/globals.css";
import Layout from "../components/Layout";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script src="/scripts/ab-testing.js" strategy="afterInteractive" />
      <Script src="/scripts/main.js" strategy="afterInteractive" />
      <Script src="/scripts/analytics.js" strategy="afterInteractive" />
      <Script src="/scripts/register-sw.js" strategy="afterInteractive" />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
