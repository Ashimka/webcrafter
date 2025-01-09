import { prisma } from "../../prisma/prisma";
import { HeroDto } from "../types/HeroDto";

class HeroService {
  async create(body: HeroDto) {
    return await prisma.hero.create({
      data: body,
    });
  }

  async update(body: HeroDto) {
    return await prisma.hero.update({
      where: { id: body.id },
      data: {
        title: body.title,
        description: body.description,
        image: body.image,
      },
    });
  }

  async getAll() {
    return await prisma.hero.findMany({
      select: {
        id: true,
      },
    });
  }
}

export default new HeroService();
