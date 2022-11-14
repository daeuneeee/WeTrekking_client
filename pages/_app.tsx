import { Global } from "@emotion/react";
import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { globalStyles } from "../src/commons/styles/globalStyles";
import ApolloSetting from "../src/components/apollo";
import Layout from "../src/components/commons/layout";

function MyApp({ Component, pageProps }: AppProps) {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log("service worker registration successful");
      })
      .catch((err) => {
        console.warn("service worker registration failed", err.message);
      });
  }

  return (
    <>
      <noscript>You should use javascript</noscript>
      <RecoilRoot>
        <Global styles={globalStyles} />
        <ApolloSetting>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloSetting>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
