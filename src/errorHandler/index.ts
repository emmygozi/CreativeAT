import express, { Request, Response, NextFunction } from 'express';

const errorHandler = (request: Request, response: Response, next: NextFunction) => {
    response.status(404).json({
        message: 'Route not found!'
    });
}

export default errorHandler;