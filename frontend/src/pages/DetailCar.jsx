import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import useGet from "../hooks/useGet";
import { useParams } from "react-router-dom";
import Detail from "../components/Detail";

const DetailRest = () => {
  const { id } = useParams();
  const { data, loading, error, fetchData } = useGet();

  console.log(id);

  useEffect(() => {
    fetchData(`/api/v1/car/${id}`);
  }, []);

  return (
    <div className="relative flex flex-col gap-4 min-h-screen">
      <Navbar />
      {data && <Detail data={data} />}
      <Footer />
    </div>
  );
};

export default DetailRest;
