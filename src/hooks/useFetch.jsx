import { useState, useEffect, useCallback, useRef } from "react";
import { debounce } from "lodash";

export const useFetch = (url, query) => {
  const [status, setStatus] = useState("idle");
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [debouncedQuery, setDebouncedQuery] = useState(query);
  const [fetchUrl, setFetchUrl] = useState(url + query);
  const prevQuery = useRef(null);

  const debounceFetch = useCallback(
    debounce(
      (query) => {
        setDebouncedQuery(query);
      },
      1000,
      { leading: true, trailing: true }
    ),
    []
  );

  useEffect(() => {
    debounceFetch(query);
    setFetchUrl(url + query);
  }, [query, debounceFetch, url]);

  useEffect(() => {
    if (!debouncedQuery) return;
    if (prevQuery.current === debouncedQuery) return;
    prevQuery.current = debouncedQuery;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(fetchUrl);
        if (!response.ok) {
          setData([]);
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (data.length > 1) {
          data.splice(1, data.length - 1);
        }

        setData(data);
        setStatus("fetched");
      } catch (error) {
        setError(error.message);
        setStatus("error");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [debouncedQuery, fetchUrl]);

  return { status, data, error, loading };
};
