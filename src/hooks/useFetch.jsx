import { useState, useEffect, useRef } from "react";
import { handleFetchStatus } from "../helpers/statusHandlers";
import { removeDuplicateData } from "../helpers/removeDuplicateData";
import { useDebounce } from "./useDebounce";
import { usePrev } from "./usePrev";

export const useFetch = (url, query) => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const debouncedQuery = useDebounce(query, 0);
  const prevQuery = usePrev(debouncedQuery);

  // Pour certains mots, l'API renvoie plusieurs résultats. -_-'
  removeDuplicateData(data);

  // Pour certaine requete, l'API n'a pas d'audio associé elle renvoie une erreur 404.

  useEffect(() => {
    if (!debouncedQuery) return;
    if (prevQuery === debouncedQuery) return;

    const fetchUrl = url + debouncedQuery;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(fetchUrl);
        handleFetchStatus(response, setStatus, setData, setError);
      } catch (error) {
        setError(error.message);
        setStatus("error");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [debouncedQuery]);

  return { status, data, error, loading };
};
