
declare namespace NodeJS {
  interface ProcessEnv {
    SERVER_HOST: string;
    SERVER_PORT: number;
    CLIENT_HOST: string;
    CLIENT_PORT: number;

    DB_DIALECT: 'mysql' | 'mariadb';
    DB_NAME: string;
    DB_HOST: string;
    DB_PORT: number;
    DB_USER: string;
    DB_PW: string;

    IMAGE_PATH: string;
  }
}
