declare namespace NodeJS {
  interface ProcessEnv {
    MODE: 'development' | 'production';
    HOST: string;
    API_SERVER_PORT: number;
    SERVER_PORT: number;
    KAKAO_CLIENT_ID: string;
    IMAGE_PATH: string;
    ADMIN_LOGIN_TOKEN: string;
    ADMIN_SESSION_SECRET: string;
  }
}
