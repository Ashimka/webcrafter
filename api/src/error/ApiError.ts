import { Request, Response, NextFunction } from "express";

interface CustomError extends Error {
  statusCode?: number;
}

const apiError = (err: CustomError, res: Response) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Что-то пошло не так";

  res.status(statusCode).json({
    statusCode,
    message,
  });
};

export default apiError;
