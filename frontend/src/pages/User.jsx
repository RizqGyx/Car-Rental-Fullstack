import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useGet from "../hooks/useGet";
import useSend from "../hooks/useSend";

const User = () => {
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

  return <div>User</div>;
};

export default User;
