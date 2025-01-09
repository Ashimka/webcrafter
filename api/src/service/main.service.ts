import { prisma } from "../../prisma/prisma";

class MainService {
  async getAll() {
    const hero = await prisma.hero.findMany({
      select: {
        id: true,
        title: true,
        description: true,
        image: true,
        feature: {
          select: {
            id: true,
            title: true,
            description: true,
            image: true,
          },
          orderBy: {
            createdAt: "asc",
          },
        },
      },
    });

    return hero;
  }
}

export default new MainService();
