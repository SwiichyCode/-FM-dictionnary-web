import { useFetch } from "./useFetch";

export const useApi = (query, config = {}) => {
  const baseUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/";
  const headers = { "Content-Type": "application/json" };

  const { data, status, error, loading } = useFetch(baseUrl + query, {
    headers,
    ...config,
  });

  return { data, status, error, loading };
};
