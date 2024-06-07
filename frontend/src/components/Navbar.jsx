import React from "react";
import { GrFavorite } from "react-icons/gr";
import { HiMenuAlt1 } from "react-icons/hi";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <nav className="bg-white text-violet-900 font-bold fixed w-full top-0 z-50 border-b-[2px] border-zinc-300">
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
              <HiMenuAlt1 className="hover:text-violet-900 text-3xl" />
            </div>
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a href="/#beranda">Beranda</a>
              </li>
              <li>
                <a href="/#ourservice">Tentang Kami</a>
              </li>
              <li>
                <a href="/#car">Mobil</a>
              </li>
              <li>
                <a href="/#rent">Sewa</a>
              </li>
            </ul>
          </div>
          <div>
            <a className="btn btn-ghost text-3xl" href="#">
              <img src="/Logo.png" alt="Logo Brand" className="h-[40px]" />
            </a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl">
            <li>
              <a
                className="transition duration-500 delay-100 hover:bg-violet-900 hover:text-white ease-out"
                href="/#beranda"
              >
                Beranda
              </a>
            </li>
            <li>
              <a
                className="transition duration-500 delay-100 hover:bg-violet-900 hover:text-white ease-out"
                href="/#about"
              >
                Tentang Kami
              </a>
            </li>
            <li>
              <a
                className="transition duration-500 delay-100 hover:bg-violet-900 hover:text-white ease-out"
                href="/#car"
              >
                Mobil
              </a>
            </li>
            <li>
              <a
                className="transition duration-500 delay-100 hover:bg-violet-900 hover:text-white ease-out"
                href="/#rent"
              >
                Sewa
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex gap-5">
          <motion.a whileHover={{ scale: 1.1 }} href="/favorite">
            <GrFavorite className="hover:text-red-700 text-3xl font-bold cursor-pointer" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            className="btn rounded-full px-10 text-xl hover:bg-violet-700 bg-violet-900 border-none text-white"
            href="/login"
          >
            Sign In
          </motion.a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
