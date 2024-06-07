import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Tabel from "../components/Tabel";
import Pagination from "../components/Pagination";
import useGet from "../hooks/useGet";
import useSend from "../hooks/useSend";

const Car = () => {
  const navigate = useNavigate();
  const { sendData } = useSend();
  const { data, loading, error, fetchData } = useGet();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    rentPerDay: "",
    capacity: "",
    size: "",
    transmission: "",
    year: "",
    createdByID: "",
    lastUpdatedByID: "",
  });

  useEffect(() => {
    fetchData(`/api/v1/car?limit=10&page=${currentPage}`);
  }, [currentPage]);

  useEffect(() => {
    if (data && data.pagination) {
      setTotalPages(data.pagination.totalPages);
    }
  }, [data]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await sendData("/api/v1/car", "POST", formData);
      setFormData({
        name: "",
        rentPerDay: "",
        capacity: "",
        size: "",
        transmission: "",
        year: "",
        createdByID: "",
        lastUpdatedByID: "",
      });
      setShowModal(false);
      fetchData(`/api/v1/car?limit=10&page=${currentPage}`);
    } catch (err) {
      console.error("Error creating car:", err);
    }
  };

  return (
    <div className="flex flex-col">
      <button
        onClick={handleModalOpen}
        className="bg-green-500 text-white font-bold text-3xl"
      >
        Add New Car
      </button>
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-violet-700 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-center text-green-400">
              New Car Form
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-white"
                  >
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border border-gray-300 text-violet-900 font-bold bg-gray-50 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="rentPerDay"
                    className="block text-sm font-medium text-white"
                  >
                    Rent Per Day:
                  </label>
                  <input
                    type="number"
                    id="rentPerDay"
                    name="rentPerDay"
                    value={formData.rentPerDay}
                    onChange={handleChange}
                    className="border border-gray-300 text-violet-900 font-bold bg-gray-50 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="capacity"
                    className="block text-sm font-medium text-white"
                  >
                    Capacity:
                  </label>
                  <input
                    type="number"
                    id="capacity"
                    name="capacity"
                    value={formData.capacity}
                    onChange={handleChange}
                    className="border border-gray-300 text-violet-900 font-bold bg-gray-50 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="size"
                    className="block text-sm font-medium text-white"
                  >
                    Size:
                  </label>
                  <input
                    type="text"
                    id="size"
                    name="size"
                    value={formData.size}
                    onChange={handleChange}
                    className="border border-gray-300 text-violet-900 font-bold bg-gray-50 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="transmission"
                    className="block text-sm font-medium text-white"
                  >
                    Transmission:
                  </label>
                  <input
                    type="text"
                    id="transmission"
                    name="transmission"
                    value={formData.transmission}
                    onChange={handleChange}
                    className="border border-gray-300 text-violet-900 font-bold bg-gray-50 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="year"
                    className="block text-sm font-medium text-white"
                  >
                    Year:
                  </label>
                  <input
                    type="number"
                    id="year"
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    className="border border-gray-300 text-violet-900 font-bold bg-gray-50 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="createdByID"
                    className="block text-sm font-medium text-white"
                  >
                    Created By ID:
                  </label>
                  <input
                    type="text"
                    id="createdByID"
                    name="createdByID"
                    value={formData.createdByID}
                    onChange={handleChange}
                    className="border border-gray-300 text-violet-900 font-bold bg-gray-50 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="lastUpdatedByID"
                    className="block text-sm font-medium text-white"
                  >
                    Last Updated By ID:
                  </label>
                  <input
                    type="text"
                    id="lastUpdatedByID"
                    name="lastUpdatedByID"
                    value={formData.lastUpdatedByID}
                    onChange={handleChange}
                    className="border border-gray-300 text-violet-900 font-bold bg-gray-50 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleModalClose}
                  className="bg-red-500 text-white rounded-md px-4 py-2 mr-2 hover:bg-red-600 focus:outline-none"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-500 text-white rounded-md px-4 py-2 hover:bg-green-600 focus:outline-none"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {data && <Tabel data={data} />}
      {data && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
          handlePageClick={handlePageClick}
        />
      )}
    </div>
  );
};

export default Car;
