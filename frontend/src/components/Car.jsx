import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Card from "./Card";

const Car = ({ data }) => {
  const [favorites, setFavorites] = useState([]);
  
  const handleFavoriteClick = (carId) => {
    if (!favorites.includes(carId)) {
      const updatedFavorites = [...favorites, carId];
      setFavorites(updatedFavorites);
      sessionStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    } else {
      const updatedFavorites = favorites.filter((id) => id !== carId);
      setFavorites(updatedFavorites);
      sessionStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
  };

  useEffect(() => {
    const storedFavorites = sessionStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.75,
        delay: 0.25,
        type: "spring",
        stiffness: 200,
      }}
      viewport={{ once: true }}
      className="w-11/12 mx-auto pt-10 flex items-center flex-col"
      id="car"
    >
      <h2 className="text-violet-900 font-bold text-4xl pb-5">
        Our Featured Car
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.cars.map((car, index) => (
          <Card
            key={index}
            data={car}
            favorites={favorites}
            onFavoriteClick={handleFavoriteClick}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Car;
