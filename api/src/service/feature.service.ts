import { prisma } from "../../prisma/prisma";
import { FeatureDto } from "../types/FeatureDto";
import heroService from "./hero.service";

class FeatureService {
  async create(body: FeatureDto) {
    const hero = await heroService.getAll();
    return await prisma.feature.create({
      data: {
        title: body.title,
        description: body.description,
        image: body.image,
        heroId: hero[0].id,
      },
    });
  }

  async update(body: FeatureDto, id: string) {
    return await prisma.feature.update({
      where: { id },
      data: body,
    });
  }
}

export default new FeatureService();
