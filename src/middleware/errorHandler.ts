import { NextFunction, Request, Response } from 'express';
import HttpException from './../exceptions/HttpException';

const errorMiddleware = (err: HttpException, request: Request, response: Response, next: NextFunction) => {
  const status = err.status || 500;
  const message = err.message || 'Something went wrong';
  response
    .status(status)
    .send({
      message,
      status,
    });
}

export default errorMiddleware;
