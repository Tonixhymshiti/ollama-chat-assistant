/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_LLM_MODEL: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
