import { NextFunction, Request, Response } from "express";
import { unlink } from "node:fs/promises";
import path from "path";

const __dirname = process.cwd();

class FileController {
  uploadImage(req: Request, res: Response, next: NextFunction) {
    try {
      if (req.file) {
        res.json({
          message: "Файл загружен",
          path: `/uploads/${req.file.filename}`,
        });
      }
    } catch (err) {
      next(err);
    }
  }

  async deleteFile(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const fileName: string = req.params.name;

    try {
      const filePath = path.join(`${__dirname}/uploads/${fileName}`);

      await unlink(filePath);

      res.status(200).json({ message: "Файл удалён!", fileName });
    } catch (err) {
      next(err);
    }
  }
}

export default new FileController();
