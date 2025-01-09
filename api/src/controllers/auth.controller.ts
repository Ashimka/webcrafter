import { NextFunction, Request, Response } from "express";
import { decode } from "jsonwebtoken";
import { UserDto } from "../types/UserDto";
import AuthService from "../service/auth.service";
import apiError from "../error/ApiError";
import { DecodedToken } from "../types/TokenPayload";

class AuthController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { login, password }: UserDto = req.body;

      await AuthService.register({ login, password });

      res.status(201).json({ message: "Регистрация прошла ушпешно!" });
    } catch (err) {
      next(err);
    }
  }

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { login, password }: UserDto = req.body;

      const user = await AuthService.login({ login, password });

      if (!user) {
        throw apiError(
          {
            statusCode: 401,
            name: "error",
            message: "Неверный логин или пароль!",
          },
          res.status(401)
        );
      }

      res.cookie("AUTH", user?.token, {
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.MODE === "production",
        maxAge: 1000 * 60 * 60,
      });

      res.status(200).json({
        id: user.id,
        login: user.login,
        role: user.role,
        token: user?.token,
      });
    } catch (err) {
      next(err);
    }
  }

  async logout(req: Request, res: Response, next: NextFunction) {
    try {
      const token = req.cookies.AUTH;
      const { login } = decode(token) as DecodedToken;

      await AuthService.logout(login);

      res.clearCookie("AUTH");
      res.status(200).json({ message: "Logout" });
    } catch (err) {
      next(err);
    }
  }

  async getUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { login }: UserDto = req.body;

      const foundUser = await AuthService.getUser(login);

      if (!foundUser) {
        throw apiError(
          {
            statusCode: 404,
            name: "error",
            message: "Пользователь не найден!",
          },
          res.status(404)
        );
      }

      res.status(200).json(foundUser);
    } catch (err) {
      next(err);
    }
  }

  async allUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await AuthService.allUsers();

      res.status(200).json(users);
    } catch (err) {
      next(err);
    }
  }
}

export default new AuthController();
