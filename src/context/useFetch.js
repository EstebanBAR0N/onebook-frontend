import { useState, useEffect, useCallback } from "react";

const useFetch = (url, clearData) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    try {
      await setLoading(true);

      const res = await fetch(url);
      const newData = await res.json();

      if (clearData) {
        await setData(newData);
      }
      else {
        await setData((prev) => [...prev, ...newData]);
      }

      await setLoading(false);
    }
    catch {
      console.log('Fetch error');
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data };
};

export default useFetch;