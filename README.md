# BookQuest: Platform for Book Enthusiasts

Welcome to **BookQuest**, a platform for everyone who wants to find and share books. This project utilizes the Open Library API to fetch details about books. You can explore, search, and share books that interest you. 

Visit our live demo: [BookQuest](https://book-quest-fawn.vercel.app)

## Getting Started

To run this project locally, follow these steps:

1. **Clone the Repository:**
   ```sh
   git clone https://github.com/Prazpa/BookQuest.git

2. **Set Up the Database:**
   2.1 Create a database using Hasura
   2.2 Create a project in Hasura Cloud
   2.3 Launch the project and add the following GraphQL code in the Hasura Console:
    ```graphql
    mutation InsertUser($password: String, $user: String) {
      insert_LogInData(objects: {password: $password, user: $user}) {
        affected_rows
        returning {
          password
          user
        }
      }
    }

    query SignInUser($username: String!, $password: String!) {
      LogInData(where: { user: { _eq: $username }, password: { _eq: $password } }) {
        user
        password
      }
    }

3. **Create Environment Variables:**
    3.1 Create a file named .env.local
    3.2 Copy the x-hasura-admin-secret value from the Hasura Console and add it to the .env.local file:
    ```sh
    VITE_HASURA_ADMIN_SECRET=x-hasura-admin-secret

4. **Install Dependencies:**
    ```sh
    npm install

5. **Run the Development Server:**
   ```sh
   npm run dev

That's it! You should now have BookQuest running locally.

# Development Setup
This project is built using React, TypeScript, and Vite. Below are some details on how to expand the ESLint configuration for a production application.

ESLint Configuration
To enable type-aware lint rules, update your configuration:

1. Configure the top-level parserOptions property:
   ```js
   export default {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json', './tsconfig.node.json'],
        tsconfigRootDir: __dirname,
      },
   }
   
2. Replace plugin:@typescript-eslint/recommended with plugin:@typescript-eslint/recommended-type-checked or plugin:@typescript-eslint/strict-type-checked.

3. Optionally, add plugin:@typescript-eslint/stylistic-type-checked.

4. Install eslint-plugin-react and add plugin:react/recommended and plugin:react/jsx-runtime to the extends list.

Happy Cloning!
