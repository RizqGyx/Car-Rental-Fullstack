import React from "react";
import Card from "./Card";

const Favorite = ({ data }) => {
  return (
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
  );
};

export default Favorite;
