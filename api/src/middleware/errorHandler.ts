import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import multer from "multer";

const errorHandler: ErrorRequestHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("error in middleware: ", err);
  if (err instanceof PrismaClientKnownRequestError) {
    if (err.code === "P2002") {
      res.status(400).json({ message: "Уже существует" });
      return;
    }
    if (err.code === "P2025") {
      res.status(404).json({ message: "Не найден" });
      return;
    }
    if (err.code === "P1001") {
      res
        .status(500)
        .json({ message: "Возникла ошибка, попробуйте снова или позднее" });
      return;
    }
  }

  if (err instanceof multer.MulterError) {
    res.status(500).send(err.message);
    return;
  }
  if (err.code === "ENOENT") {
    res.status(404).json({ message: "Файл не найден" });
    return;
  }
  if (err.message === "Неправильный тип файла") {
    res.status(400).json({ message: "Неправильный тип файла" });
    return;
  }

  if (err.status === 404) {
    res.status(404).json({ message: err.message });
    return;
  }

  res.status(500).json({ message: "Ошибка сервера" });
  return;
};

export default errorHandler;
