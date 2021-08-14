import { useEffect, useState } from "react";

/* WITH FETCH */
const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);
        const json = await res.json();
        setData(json);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return { loading, error, data };
};

/* WITH AXIOS */
/* const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data } = await axios(url);
        setData(data);
        setLoading(false);
      } catch (err) {
        setError(err);
      }
    };
    fetchData();
  }, [url]);
  return { loading, error, data };
}; */

export default useFetch;
