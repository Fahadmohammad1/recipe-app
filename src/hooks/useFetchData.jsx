import axios from "axios";
import { useEffect, useState } from "react";

const useFetchData = (id = null) => {
  const [data, setData] = useState([] || {});
  const baseUrl = `http://localhost:3000/watches`;

  useEffect(() => {
    (async () => {
      const res = await axios.get(id ? baseUrl + `/${id}` : baseUrl);
      if (res?.status === 200) {
        setData(res?.data);
      }
    })();
  }, [baseUrl, id]);

  return data;
};

export default useFetchData;
