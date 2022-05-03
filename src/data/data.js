import { useEffect, useState } from "react";

export const useApi = (url) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)

  const fetchApi = () => {
    fetch(url)
    .then(response => {
      return response.json()
    })
    .then(json => {
      setLoading(false)
      setData(json.data)
    })
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return { loading, data }
};
