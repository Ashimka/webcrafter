import { NextFunction, Request, Response } from "express";
import mainService from "../service/main.service";

class MainController {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const hero = await mainService.getAll();

      res.status(200).json(hero);
    } catch (err) {
      next(err);
    }
  }
}

export default new MainController();
