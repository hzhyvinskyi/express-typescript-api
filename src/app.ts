import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import * as bodyParser from 'body-parser';

import errorHandler from './middleware/errorHandler';

class App {
  private app: express.Application;

  constructor(controllers) {
    this.app = express();

    this.initializeMiddlewares();
    this.initializeControllers(controllers);
    this.initializeErrorHandling();
  }

  private initializeMiddlewares() {
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(bodyParser.json());
  }

  private initializeControllers(controllers) {
    controllers.forEach((controller) => {
      this.app.use('/', controller.router);
    });
  }

  private initializeErrorHandling() {
    this.app.use(errorHandler);
  }

  public listen() {
    console.log('Port: ', process.env.PORT);
    this.app.listen(process.env.PORT || 3000);
  }
}

export default App;
