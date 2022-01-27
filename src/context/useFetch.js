import { useState, useEffect, useCallback } from "react";

// function compare(a, b ) {
//   if ( a.username < b.username ){
//     return -1;
//   }
//   if ( a.username > b.username ){
//     return 1;
//   }
//   return 0;
// }

const useFetch = (url, clearData) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    try {
      await setLoading(true);

      const res = await fetch(url);
      const newData = res.status === 200 ? await res.json() : [];

      if (clearData) {
        await setData(newData);
      }
      else {
        await setData((prev) => [...prev, ...newData]);
      }

      await setLoading(false);
    }
    catch {
      console.log('No fetch done');
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, loading };
};

export default useFetch;