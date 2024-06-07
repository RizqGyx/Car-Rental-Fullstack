import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const List = ({ text }) => {
  return (
    <p className="flex items-center gap-4 text-lg text-black/60">
      <FaCheckCircle className="text-[#0d28a6]" /> {text}
    </p>
  );
};

export default List;
