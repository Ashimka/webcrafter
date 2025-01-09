import { SERVER_URL } from "../config/api.config";

export const useDeleteFile = (name: string | undefined) => {
  const nameFile = name?.split("/")[2];
  const fetchDeleteFile = async () => {
    await fetch(`${SERVER_URL}/admink/upload/${nameFile}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
  };

  return { fetchDeleteFile };
};
