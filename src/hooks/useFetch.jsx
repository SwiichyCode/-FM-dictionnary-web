import { useState, useEffect } from "react";

export const useFetch = (url, [query]) => {
  const [status, setStatus] = useState("idle");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      setStatus("fetching");
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setStatus("fetched");
    };

    fetchData();
  }, [query]);

  return { status, data };
};
