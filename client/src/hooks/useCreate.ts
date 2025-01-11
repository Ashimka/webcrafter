import { FetchData } from "../types";

export const useCreate = () => {
  const fetchCreate = async (data: FetchData, url: string) => {
    await fetch(`/api/admink/${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    });
  };

  return { fetchCreate };
};
