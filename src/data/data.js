import { useEffect, useState } from "react";

export const useApi = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)

  const fetchApi = () => {
    fetch('https://okrcentral.github.io/sample-okrs/db.json')
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
