import React from "react";

const DeleteButton = ({ onClick }) => {
  return (
    <button
      className="px-3 py-1 mx-1 bg-red-500 text-white rounded hover:bg-red-600"
      onClick={onClick}
    >
      Delete
    </button>
  );
};

export default DeleteButton;
