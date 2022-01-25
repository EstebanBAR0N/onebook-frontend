import { useState, useEffect, useCallback  } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log('Dans le fetch')

  const fetchData = useCallback(async () => {
    try {
      await setLoading(true);
  
      console.log('Loading ', loading);
  
      const res = await fetch(url);
      const newData = await res.json(); 
  
      console.log('newData : ', newData);
  
      await setData((prev) => [...prev, ...newData]);
  
      setLoading(false);
  
      console.log('Loading2 ', loading);
    }
    catch {
      console.log('Fetch error');
    }
  }, [url]);

  useEffect(() => {
    fetchData();
    console.log("UNE QUERY SEXECUTE !");
  }, [url]);

  return [data];
};

export default useFetch;