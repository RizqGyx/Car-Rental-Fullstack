import React from "react";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Card({ data, favorites, onFavoriteClick }) {
  const navigate = useNavigate();
  const isFavorite = favorites.includes(data.id);

  const handleFavoriteClick = (event) => {
    event.stopPropagation();
    onFavoriteClick(data.id);
  };

  const formattedRent = data.rentPerDay.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  return (
    <div
      className="card h-100 max-w-[384px] overflow-hidden bg-white shadow-2xl cursor-pointer relative"
      onClick={() => {
        navigate(`/car/${data.id}`);
      }}
    >
      <div className="absolute top-2 right-2">
        <button
          className="focus:outline-none bg-violet-900 p-2 rounded-full"
          onClick={handleFavoriteClick}
        >
          {isFavorite ? (
            <FaHeart className="text-red-500 text-3xl" />
          ) : (
            <FaHeart className="text-white text-3xl" />
          )}
        </button>
      </div>
      <img
        src={data.photo}
        alt={data.name}
        className="aspect-[17/9] w-full rounded object-cover"
      />
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="card-title text-violet-900 font-extrabold text-lg">
            {data.name}
          </h2>
          <h2 className="bg-violet-900 h-8 p-1 rounded text-white font-extrabold text-md">
            {data.size}
          </h2>
        </div>
        <p className="text-black font-bold">{formattedRent} / hari</p>
        <p className="text-black font-bold">
          Transmission : {data.transmission}
        </p>
        <p className="text-black font-bold">Capacity : {data.capacity}</p>
      </div>
    </div>
  );
}

export default Card;
