export const handleFetchStatus = async (
  response,
  setStatus,
  setData,
  setError
) => {
  switch (response.status) {
    case 404:
      setStatus("wordNotFound");
      setError(null);
      break;
    case 200:
      setStatus("fetched");

      setData(await response.json());
      break;
    default:
      setStatus("error");
      setError(`HTTP error! status: ${response.status}`);
  }
};
