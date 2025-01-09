import { useCallback, useEffect, useState } from "react";
import { SERVER_URL } from "../config/api.config";
import { FetchData } from "../types";

export const useFetch = (url: string) => {
  const [data, setData] = useState<FetchData | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${SERVER_URL}/${url}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const data = await response.json();
      setData(data[0]);
    } catch (err: unknown) {
      err instanceof Error && setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, error, loading, refresh: fetchData };
};
