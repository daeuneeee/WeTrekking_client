import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  fromPromise,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { onError } from "@apollo/client/link/error";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../store";
import { getAccessToken } from "../../commons/utils/getAccessToken";
import { useEffect } from "react";

interface IApolloSettingProps {
  children: JSX.Element;
}

const GLOBAL_STATE = new InMemoryCache();

export default function ApolloSetting(props: IApolloSettingProps) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  // useEffect(() => {
  //   void getAccessToken().then((newAccessToken) => {
  //     setAccessToken(newAccessToken);
  //   });
  // }, []);

  // const errorLink = onError(({ graphQLErrors, operation, forward }) => {
  //   if (graphQLErrors) {
  //     for (const err of graphQLErrors) {
  //       if (err.extensions.code === "UNAUTHENTICATED") {
  //         return fromPromise(
  //           getAccessToken().then((newAccessToken) => {
  //             setAccessToken(newAccessToken);

  //             operation.setContext({
  //               headers: {
  //                 ...operation.getContext().headers,
  //                 Authorization: `Bearer ${newAccessToken}`,
  //               },
  //             });
  //           })
  //         ).flatMap(() => forward(operation));
  //       }
  //     }
  //   }
  // });

  const uploadLink = createUploadLink({

    uri: "https://wetrekking.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
    // credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: GLOBAL_STATE,
  });

  // prettier-ignore
  return (
          <ApolloProvider client={client}>
              {props.children}
          </ApolloProvider>
      )
}
