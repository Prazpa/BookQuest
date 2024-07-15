import ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import './index.css';
import App from './App';

const client = new ApolloClient({
  uri: 'https://improved-mastodon-33.hasura.app/v1/graphql',
  cache: new InMemoryCache(),
  headers: {
    'x-hasura-admin-secret': import.meta.env.VITE_HASURA_ADMIN_SECRET
  }
});

client
  .query({
    query: gql`
      query GetAllLogInData {
        LogInData {
          user
          password
        }
      }
    `,
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
    if (error.networkError) {
      console.error("Network Error:", error.networkError);
    }
    if (error.graphQLErrors) {
      error.graphQLErrors.forEach(({ message, locations, path }: any) =>
        console.error(`GraphQL Error: Message: ${message}, Location: ${locations}, Path: ${path}`)
      );
    }
  });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
