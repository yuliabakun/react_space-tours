import { ApolloClient, InMemoryCache } from "@apollo/client";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const client = new ApolloClient({
  uri: BASE_URL,
  cache: new InMemoryCache(),
});
