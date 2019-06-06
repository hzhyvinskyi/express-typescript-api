import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST || 'postgres',
  port: Number(process.env.POSTGRES_PORT) || 3000,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: [
    __dirname + './../entity/*.ts',
  ],
  migrations: [
    './../migrations/*.ts',
  ],
  cli: {
    migrationsDir: './../migrations',
  },
};

export = config;
