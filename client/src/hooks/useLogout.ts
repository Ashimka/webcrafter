import { SERVER_URL } from "../config/api.config";

export const useLogout = () => {
  const fetchLogout = async () => {
    await fetch(`${SERVER_URL}/admink/logout`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
  };

  return { logOut: fetchLogout };
};
