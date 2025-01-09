import { NextFunction, Request, Response } from "express";
import FeatureService from "../service/feature.service";

class FeatureController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { title, description, image } = req.body;

      const feature = await FeatureService.create({
        title,
        description,
        image,
      });

      res.status(201).json(feature);
    } catch (err) {
      next(err);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { title, description, image } = req.body;
      const { id } = req.params;

      const feature = await FeatureService.update(
        {
          title,
          description,
          image,
        },
        id
      );

      res.status(200).json(feature);
    } catch (err) {
      next(err);
    }
  }
}

export default new FeatureController();
