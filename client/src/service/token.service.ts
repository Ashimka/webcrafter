import Cookies from "js-cookie";
import { APP_URL } from "../config/uri.config";

export const getAccessToken = () => {
  const accessToken = Cookies.get("AT");
  return accessToken || null;
};

export const saveTokenStorage = (accessToken: string) => {
  Cookies.set("AT", accessToken, {
    path: APP_URL,
    sameSite: "Strict",
    expires: 1 / 24,
    secure: import.meta.env.VITE_MODE === "production",
  });
};

export const removeTokenFromStorage = () => {
  Cookies.remove("AT");
};
