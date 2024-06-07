import React, { useEffect } from "react";
import { FaCar } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useSend from "../hooks/useSend";

const Dashboard = () => {
  const navigate = useNavigate();
  const { sendData } = useSend();

  useEffect(() => {
    const handleToken = async () => {
      try {
        const token = localStorage.getItem("jwtToken");

        if (!token) {
          navigate("/");
          return;
        }

        const checktoken = await sendData(
          "/api/v1/auth/checktoken",
          "GET",
          null,
          localStorage.getItem("jwtToken")
        );
        if (checktoken.data.user.role === "Member") {
          navigate("/");
        }
      } catch (err) {
        console.error("Error checking token:", err);
      }
    };
    handleToken();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex gap-5 flex-wrap px-10">
        <a
          href="/dashboard/car"
          className="flex flex-col justify-center gap-2 items-center text-white p-5 rounded bg-violet-700 hover:no-underline"
        >
          <FaCar className="text-white text-4xl" />
          <h1>Dashboard Car</h1>
        </a>
        <a
          href="/dashboard/user"
          className="flex flex-col justify-center gap-2 items-center text-white p-5 rounded bg-violet-700 hover:no-underline"
        >
          <FaUserAlt className="text-white text-4xl" />
          <h1>Dashboard User</h1>
        </a>
      </div>
    </div>
  );
};

export default Dashboard;
