/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL: string;
  readonly VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY: string;

  // 필요하면 다른 VITE_로 시작하는 환경변수들도 여기에 추가
  // [key: string]: string | boolean | undefined 같은 식으로 자유롭게 써도 됨
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
