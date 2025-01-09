export const APP_URL = import.meta.env.VITE_APP_URL as string;

export const PUBLIC_URL = {
  root: (url = "") => `${url ? url : ""}`,

  home: () => PUBLIC_URL.root("/"),
};

export const ADMIN_URL = {
  root: (url = "") => `/admink${url ? url : ""}`,

  home: () => ADMIN_URL.root("/"),
  auth: () => ADMIN_URL.root("/login"),
};
