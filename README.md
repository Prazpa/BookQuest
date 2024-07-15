# BookQuest, Platform for everyone who want to find a book 
This project made by using openlibrary for fetching detail about book in library.
You can explore, search and share the book that you want.
To see all of detail, You can clone and install node-module first by using
1. git clone https://github.com/Prazpa/BookQuest.git
2. npm install 
3. npm run dev BookQuest

That's all of my project

Happy Clonning!!

# Preview
Link(incomplete deployment): https://book-quest-two.vercel.app/

[Homepage]
<img width="800" alt="Screenshot 2024-06-10 110835" src="https://github.com/Prazpa/BookQuest/assets/150646070/dae6b644-2162-49ba-a687-d624aaa141b9">

[Detailpage]
<img width="800" alt="Screenshot 2024-06-11 154737" src="https://github.com/Prazpa/BookQuest/assets/150646070/d5f82f42-c36e-47bc-a47d-83834b9aec18">

[BookDetail]
<img width="800" alt="Screenshot 2024-06-11 155107" src="https://github.com/Prazpa/BookQuest/assets/150646070/857f3c9e-7022-4b58-9d8f-10f25fd9f29f">





# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
