declare namespace NodeJS {
  interface ProcessEnv {
    MODE: 'development' | 'production';
    HOST: string;
    API_SERVER_PORT: number;
    SERVER_PORT: number;
    KAKAO_CLIENT_ID: string;
  }
}
