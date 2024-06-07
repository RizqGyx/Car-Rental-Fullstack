import React from "react";

const EditButton = ({ onClick }) => {
  return (
    <button
      className="px-3 py-1 mx-1 bg-green-500 text-white rounded hover:bg-green-600"
      onClick={onClick}
    >
      Edit
    </button>
  );
};

export default EditButton;
