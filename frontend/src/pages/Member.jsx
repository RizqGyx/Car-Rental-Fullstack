import React, { useState } from "react";
import { IoMdArrowRoundBack, IoMdCheckmarkCircle } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import useSend from "../hooks/useSend";

const Member = () => {
  const { loading, error, sendData } = useSend();
  const [success, setSuccess] = useState(false);
  const [registerData, setRegisterData] = useState({
    name: "",
    age: "",
    email: "",
    password: "",
    city: "",
    address: "",
    phone: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await sendData(
        "/api/v1/auth/register/member",
        "POST",
        registerData
      );
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        navigate("/login");
      }, 3000);
    } catch (error) {
      console.error("Register error:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({
      ...registerData,
      [name]: value.toLowerCase(),
    });
  };

  return (
    <section id="register-member">
      <div className="flex flex-col sticky top-40 items-center md:items-end md:mx-20 justify-center px-6 py-8 m-auto md:h-screen lg:py-0">
        <div className="w-full bg-violet-700 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="flex items-center text-xl gap-5 font-bold leading-tight tracking-tight text-white md:text-2xl">
              <a
                href="/"
                className="bg-black/60 rounded-full p-1 hover:bg-black/80"
              >
                <IoMdArrowRoundBack />
              </a>
              Create new account
            </h1>
            {error && (
              <h2 className="text-center text-white bg-red-500 rounded p-2">
                Failed - Check Your Input Again or Email Already Used
              </h2>
            )}
            {success && (
              <>
                <div className="fixed top-[-1rem] md:top-[-1.6rem] left-0 w-full h-full bg-black opacity-50 z-40"></div>
                <div className="fixed flex flex-col items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-20 px-40 rounded-md shadow-md z-50">
                  <IoMdCheckmarkCircle className="text-green-500 text-8xl md:text-9xl" />
                  <h2 className="text-center text-green-500 font-bold text-3xl md:text-4xl">
                    Register berhasil
                  </h2>
                </div>
              </>
            )}
            <form
              className="grid grid-cols-2 gap-4"
              onSubmit={handleSubmit}
              method="POST"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 font-bold text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  placeholder="Your Name"
                  onBlur={handleInputChange}
                  value={registerData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="age"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Age
                </label>
                <input
                  type="number"
                  name="age"
                  id="age"
                  className="bg-gray-50 border border-gray-300 font-bold text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  placeholder="Your Age"
                  onBlur={handleInputChange}
                  value={registerData.age}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 font-bold text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  placeholder="name@example.com"
                  value={registerData.email}
                  onChange={(e) =>
                    setRegisterData({ ...registerData, email: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 font-bold text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  placeholder="Your Password"
                  onBlur={handleInputChange}
                  value={registerData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="city"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  className="bg-gray-50 border border-gray-300 font-bold text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  placeholder="Your City"
                  onBlur={handleInputChange}
                  value={registerData.city}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  className="bg-gray-50 border border-gray-300 font-bold text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  placeholder="Your Address"
                  onBlur={handleInputChange}
                  value={registerData.address}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="bg-gray-50 border border-gray-300 font-bold text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  placeholder="Your Phone Number"
                  onBlur={handleInputChange}
                  value={registerData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-span-2">
                <button
                  type="submit"
                  className="w-full text-white bg-black/60 hover:bg-black/80 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Sign Up
                </button>
              </div>
            </form>
            <p className="text-sm font-light text-white">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-medium text-blue-300 hover:underline"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Member;
