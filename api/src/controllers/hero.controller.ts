import { NextFunction, Request, Response } from "express";
import HeroService from "../service/hero.service";

class HeroController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { title, description, image } = req.body;

      const hero = await HeroService.create({ title, description, image });

      res.status(201).json(hero);
    } catch (err) {
      next(err);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { title, description, image } = req.body;
      const { id } = req.params;
      const hero = await HeroService.update({ id, title, description, image });

      res.status(200).json(hero);
    } catch (err) {
      next(err);
    }
  }
}

export default new HeroController();
