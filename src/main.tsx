import ReactDOM from "react-dom/client";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
// import { v2 as cloudinary } from 'cloudinary';
import "./app/index.css";
import App from "./app/App";

const client = new ApolloClient({
  uri: import.meta.env.VITE_HASURA_ENDPOINT,
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret": import.meta.env.VITE_HASURA_ADMIN_SECRET,
  },
});

// cloudinary.config({ 
//   cloud_name: import.meta.env.Cloudinary_Cloud_Name, 
//   api_key: import.meta.env.Cloudinary_API_Key, 
//   api_secret: import.meta.env.Cloudinary_API_Secret
// });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
