/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_HASURA_ADMIN_SECRET: string;
    // add more environment variables here if needed
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  