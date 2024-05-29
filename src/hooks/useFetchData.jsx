import axios from "axios";
import { useEffect, useState } from "react";

const useFetchData = (id = null) => {
  const [watches, setWatches] = useState([] || {});
  const baseUrl = `http://localhost:3000/watches`;

  useEffect(() => {
    (async () => {
      const data = await axios.get(id ? baseUrl + `/${id}` : baseUrl);
      if (data?.status === 200) {
        setWatches(data?.data);
      }
    })();
  }, [baseUrl, id]);

  return watches;
};

export default useFetchData;
