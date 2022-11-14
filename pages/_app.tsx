import { Global } from "@emotion/react";
import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { globalStyles } from "../src/commons/styles/globalStyles";
import ApolloSetting from "../src/components/apollo";
import Layout from "../src/components/commons/layout";

function MyApp({ Component, pageProps }: AppProps) {
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
