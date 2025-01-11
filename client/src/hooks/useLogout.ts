export const useLogout = () => {
  const fetchLogout = async () => {
    await fetch(`/api/admink/logout`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
  };

  return { logOut: fetchLogout };
};
