import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import DetailCar from "./pages/DetailCar";
import Login from "./pages/Login";
import Member from "./pages/Member";
import Dashboard from "./pages/Dashboard";
import Car from "./pages/Car";
import User from "./pages/User";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/car/:id" element={<DetailCar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register/member" element={<Member />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/car" element={<Car />} />
        <Route path="/dashboard/user" element={<User />} />
        <Route
          path="*"
          element={
            <div className="grid place-items-center">For 404 Not Found</div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
