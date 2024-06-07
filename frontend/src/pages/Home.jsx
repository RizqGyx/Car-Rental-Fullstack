import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Aboutus from "../components/Aboutus";
import Car from "../components/Car";
import Footer from "../components/Footer";
import useGet from "../hooks/useGet";
import Sewa from "../components/Sewa";
import Pagination from "../components/Pagination";

const Home = () => {
  const { data, loading, error, fetchData } = useGet();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchData(`/api/v1/car?limit=6&page=${currentPage}`);
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

  return (
    <div className="relative flex flex-col gap-4 min-h-screen">
      <Navbar />
      <Hero />
      <Aboutus />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && <Car data={data} />}
      {data && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
          handlePageClick={handlePageClick}
        />
      )}
      <Sewa />
      <Footer />
    </div>
  );
};

export default Home;
