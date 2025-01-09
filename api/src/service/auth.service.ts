import { hash, verify } from "argon2";
import jwt from "jsonwebtoken";

import { prisma } from "../../prisma/prisma";
import { UserDto } from "../types/UserDto";
import { TokenPayload } from "../types/TokenPayload";

class AuthService {
  async register({ login, password }: UserDto) {
    return await prisma.user.create({
      data: {
        login,
        password: await hash(password),
      },
    });
  }

  async login({ login, password }: UserDto) {
    const foundUser = await this.getUser(login);

    if (!foundUser) {
      return null;
    }

    const verifyPass = await this.chechPassword(password, foundUser?.password);

    if (!verifyPass) {
      return null;
    }

    const token: string = this.createToken({
      login: foundUser.id,
      role: foundUser.role,
    });

    await prisma.user.update({
      where: {
        id: foundUser.id,
      },
      data: {
        accessToken: token,
      },
    });

    return { ...foundUser, token };
  }

  async logout(id: string) {
    return await prisma.user.update({
      where: { id },
      data: {
        accessToken: null,
      },
    });
  }

  async getUser(login: string) {
    return await prisma.user.findUnique({
      where: {
        login,
      },
      select: {
        id: true,
        login: true,
        password: true,
        accessToken: true,
        role: true,
      },
    });
  }

  async allUsers() {
    return await prisma.user.findMany({});
  }

  private async chechPassword(password: string, hashPassword: string) {
    return await verify(hashPassword, password);
  }

  private createToken({ login, role }: TokenPayload) {
    const secret = process.env.TOKEN_SECRET || "asdfreq_secret*456321";
    return jwt.sign({ login, role }, secret, {
      expiresIn: "60m",
    });
  }
}

export default new AuthService();
