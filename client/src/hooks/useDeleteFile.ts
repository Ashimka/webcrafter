export const useDeleteFile = (name: string | undefined) => {
  const nameFile = name?.split("/")[2];
  const fetchDeleteFile = async () => {
    await fetch(`/api/admink/upload/${nameFile}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
  };

  return { fetchDeleteFile };
};
