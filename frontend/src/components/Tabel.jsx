import React, { useEffect, useState } from "react";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import useSend from "../hooks/useSend";
import { useNavigate } from "react-router-dom";

const Tabel = ({ data }) => {
  const { loading, error, sendData } = useSend();
  const [deleted, setDeleted] = useState(false);
  const handleEdit = async (id) => {};

  const handleDelete = async (id) => {
    try {
      const response = await sendData(`/api/v1/car/${id}`, "DELETE");
      setDeleted(true);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (deleted) {
      window.location.reload();
    }
  }, [deleted]);

  return (
    <div className="overflow-x-auto mb-5">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-violet-700 text-white text-center">
            <th className="px-4 py-1">ID</th>
            <th className="px-4 py-1">Name</th>
            <th className="px-4 py-1">Rent Per Day</th>
            <th className="px-4 py-1">Capacity</th>
            <th className="px-4 py-1">Size</th>
            <th className="px-4 py-1">Transmission</th>
            <th className="px-4 py-1">Year</th>
            <th className="px-4 py-1">Created By ID</th>
            <th className="px-4 py-1">Last Updated By ID</th>
            <th className="px-4 py-1">Action</th>
          </tr>
        </thead>
        <tbody className="bg-gray-200">
          {data.cars.map((car, index) => (
            <tr key={index} className="text-gray-700 text-center">
              <td className="border px-4 py-1">{car.id}</td>
              <td className="border px-4 py-1">{car.name}</td>
              <td className="border px-4 py-1">{car.rentPerDay}</td>
              <td className="border px-4 py-1">{car.capacity}</td>
              <td className="border px-4 py-1">{car.size}</td>
              <td className="border px-4 py-1">{car.transmission}</td>
              <td className="border px-4 py-1">{car.year}</td>
              <td className="border px-4 py-1">{car.createdByID}</td>
              <td className="border px-4 py-1">{car.lastUpdatedByID}</td>
              <td className="border px-4 py-1">
                <EditButton onClick={() => handleEdit(car.id)} />
                <DeleteButton onClick={() => handleDelete(car.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tabel;
