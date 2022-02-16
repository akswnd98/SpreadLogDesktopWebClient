declare namespace NodeJS {
  interface ProcessEnv {
    MODE: 'development' | 'production';
    HOST: string;
    API_SERVER_PORT: number;
  }
}
