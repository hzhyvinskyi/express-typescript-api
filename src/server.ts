import 'dotenv/config';
import 'reflect-metadata';
import { createConnection } from 'typeorm';

import App from './app';
import config from './config/ormconfig';
import PostController from './components/Post/PostController';

(async () => {
  try {
    await createConnection(config);
  } catch (err) {
    return err;
  }
  const app = new App([
    new PostController()
  ]);
  app.listen();
})();
