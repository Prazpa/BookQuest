import ReactDOM from 'react-dom/client'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import './index.css'
import App from './App'
import { HASURA_ADMIN_SECRET } from "../header";


const client = new ApolloClient({
  uri: 'https://bookquest.hasura.app/v1/graphql/',
  cache: new InMemoryCache(),
  headers: {
    'x-hasura-admin-secret': HASURA_ADMIN_SECRET
  }
});

client
  .query({
    query: gql`
      query MyQuery {
        user {
          username
          password
        }
      }
    `,
  })
  .then((result) => {
    console.log(result); 
  });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
