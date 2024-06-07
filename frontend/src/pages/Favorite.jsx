import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import useGet from "../hooks/useGet";

const Favorite = () => {
  const { data, loading, error, fetchData } = useGet();
  const [favoriteCars, setFavoriteCars] = useState([]);

  useEffect(() => {
    fetchData(`/api/v1/car`);
  }, []);

  useEffect(() => {
    const storedFavorites = sessionStorage.getItem("favorites");
    if (storedFavorites) {
      setFavoriteCars(JSON.parse(storedFavorites));
    }
  }, []);

  return (
    <div>
      <Navbar />
      <div
        className="w-full md:w-11/12 mx-auto py-5 flex items-center flex-col"
        id="favorite-cars"
      >
        <h2 className="text-violet-900 font-bold text-4xl pb-5 pt-20">
          Favorite Cars
        </h2>
        {loading && data && <Favorite data={data} />}
      </div>
      <Footer />
    </div>
  );
};

export default Favorite;
