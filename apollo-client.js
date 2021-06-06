import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  ssrMode: true,
  link: createHttpLink({
    uri: process.env.GRAPHQL_URL,
  }),
  cache: new InMemoryCache(),
});

export default client;
