export const SERVER_URL = import.meta.env.VITE_SERVER_URL as string;

export const API_URL = {
  root: (url = "") => `${url ? url : ""}`,

  admin: (url = "") => API_URL.root(`/admink${url}`),
};
