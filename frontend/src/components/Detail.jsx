import React from "react";
import { CgSize } from "react-icons/cg";
import { GiCarKey } from "react-icons/gi";
import { MdReduceCapacity, MdCarRental, MdDateRange } from "react-icons/md";

const Detail = ({ data }) => {
  const car = data.data.car;
  console.log(car);

  return (
    <div className="md:pb-80 pt-20 mt-10">
      <div className="w-11/12 mx-auto flex flex-col md:flex-row justify-between gap-8">
        <img
          src={car.photo}
          alt={car.name}
          className="w-full h-[50vw] md:h-auto md:w-1/3 object-contain object-center rounded-lg shadow-lg"
        />
        <div className="text-violet-900 flex flex-col gap-6 font-bold text-lg flex-1">
          <h1 className="text-4xl text-center md:text-left md:text-4xl">
            {car.name}
          </h1>
          <div className="flex flex-col gap-6">
            <div className="bg-[#201658] rounded-xl px-6 py-4 flex items-center gap-3 shadow-md">
              <CgSize className="text-white text-4xl" />
              <h3 className="text-white text-xl md:text-2xl">
                Size: {car.size}
              </h3>
            </div>
            <div className="bg-[#201658] rounded-xl px-6 py-4 flex items-center gap-3 shadow-md">
              <MdReduceCapacity className="text-white text-4xl" />
              <h3 className="text-white text-xl md:text-2xl">
                Capacity: {car.capacity}
              </h3>
            </div>
            <div className="bg-[#201658] rounded-xl px-6 py-4 flex items-center gap-3 shadow-md">
              <MdCarRental className="text-white text-4xl" />
              <h3 className="text-white text-xl md:text-2xl">
                Rent per day: {car.rentPerDay}
              </h3>
            </div>
            <div className="bg-[#201658] rounded-xl px-6 py-4 flex items-center gap-3 shadow-md">
              <GiCarKey className="text-white text-4xl" />
              <h3 className="text-white text-xl md:text-2xl">
                Transmission: {car.transmission}
              </h3>
            </div>
            <div className="bg-[#201658] rounded-xl px-6 py-4 flex items-center gap-3 shadow-md">
              <MdDateRange className="text-white text-4xl" />
              <h3 className="text-white text-xl md:text-2xl">
                Year: {car.year}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
