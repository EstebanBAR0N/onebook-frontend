import { useState, useEffect, useCallback } from "react";

function compareByUsername(a, b) {
  if ( a.username < b.username ){
    return -1;
  }
  if ( a.username > b.username ){
    return 1;
  }
  return 0;
}

function compareByLastUpdate(a, b) {
  if ( a.updatedAt < b.updatedAt ){
    return 1;
  }
  if ( a.updatedAt > b.updatedAt ){
    return -1;
  }
  return 0;
}

const useFetch = (url, clearData, sortByUsername = false) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    try {
      await setLoading(true);

      const res = await fetch(url);
      const newData = res.status === 200 ? await res.json() : [];

      if (clearData) {
        await setData(() => {
          let tab = newData;

          // sort data by username or last update
          if (sortByUsername && tab[0]?.username && tab.length > 1) {
            tab.sort(compareByUsername);
          }
          else if (tab && tab.length > 1) {
            tab.sort(compareByLastUpdate);
          }

          return tab;
        });
      }
      else {
        await setData((prev) => {
          let tab = newData;

          // sort by last update
          if (tab && tab.length > 1) {
            tab.sort(compareByLastUpdate);
          }

          return [...prev, ...tab];
        })
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