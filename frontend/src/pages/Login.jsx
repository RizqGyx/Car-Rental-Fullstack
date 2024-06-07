import React, { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import useSend from "../hooks/useSend";

const Login = () => {
  const { loading, error, sendData } = useSend();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await sendData("/api/v1/auth/login", "POST", login);
      localStorage.setItem("jwtToken", response.data);
      const checktoken = await sendData(
        "/api/v1/auth/checktoken",
        "GET",
        null,
        localStorage.getItem("jwtToken")
      );
      if (checktoken.data.user.role === "Member") {
        navigate("/");
      }
      navigate("/dashboard");
    } catch (error) {
      if (error.response.status === 404) {
        console.error("Authentication failed: Not Found");
        alert("Email or password is incorrect");
      } else {
        console.error("Login error:", error);
      }
    }
  };

  return (
    <section id="login">
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
              Sign in to your account
            </h1>
            {error && (
              <h2 className="text-center text-white bg-red-500 rounded p-2">
                Wrong Password or Email
              </h2>
            )}
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleSubmit}
              method="POST"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 font-bold text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  placeholder="name@example.com"
                  value={login.email}
                  onChange={(e) =>
                    setLogin({ ...login, email: e.target.value })
                  }
                  required
                  autoComplete="email"
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
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  value={login.password}
                  onChange={(e) =>
                    setLogin({ ...login, password: e.target.value })
                  }
                  required
                  autoComplete="current-password"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-white">
                      Remember me
                    </label>
                  </div>
                </div>
                <a href="#" className="text-sm font-medium hover:underline">
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-black/60 hover:bg-black/80 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-white">
                Don't have an account yet?{" "}
                <Link
                  to="/register/member"
                  className="font-medium text-blue-300 hover:underline"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
