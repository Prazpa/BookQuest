/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_HASURA_ADMIN_SECRET: string;
}
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  