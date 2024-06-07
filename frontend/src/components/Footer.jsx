import React from "react";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="bg-white text-black/50 font-bold md:absolute bottom-0 w-full">
      <div className="footer w-11/12 mx-auto px-5 py-10 justify-between">
        <aside>
          <img src="/Logo.png" alt="Logo Brand" className="h-[50px]" />
          <p>
            PT. Lentera Bangsa Benderang
            <br />
            Binar Academy
          </p>
        </aside>
        <nav>
          <header className="footer-title text-xl text-black">Company</header>
          <a className="link link-hover" href="/#">
            Beranda
          </a>
          <a className="link link-hover" href="/#about">
            Tentang Kami
          </a>
          <a className="link link-hover" href="/#car">
            Mobil
          </a>
          <a className="link link-hover" href="/#rent">
            Sewa
          </a>
        </nav>
        <nav>
          <header className="footer-title text-xl text-black">Company</header>
          <a className="link link-hover">FAQ</a>
          <a className="link link-hover">Location</a>
          <a className="link link-hover">Privacy & Policy</a>
        </nav>
        <nav>
          <header className="footer-title text-xl text-black">Support</header>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Feedback</a>
        </nav>
        <nav>
          <header className="footer-title text-xl text-black">
            Stay Up to Date
          </header>
          <div className="join">
            <input
              className="input input-bordered join-item bg-white"
              placeholder="Email"
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              className="btn join-item rounded-r-full bg-violet-900 border-none hover:bg-violet-700 text-white"
            >
              Send
            </motion.button>
          </div>
        </nav>
      </div>
      <div className="bg-[#201658] text-white p-5 w-full">
        <h1 className="text-center font-bold">
          © 2024 Copyright - Muhammad Rizki
        </h1>
      </div>
    </footer>
  );
}

export default Footer;
