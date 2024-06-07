import { useState } from "react";
import axios from "axios";

const useGet = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async (url) => {
    const BASE_URL = "http://localhost:3000";
    let datas;
    setLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}${url}`);

      if (response.status !== 200) {
        throw new Error("Failed to fetch data");
      }

      datas = await response.data;
      setData(datas);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  return { data, loading, error, fetchData };
};

export default useGet;
