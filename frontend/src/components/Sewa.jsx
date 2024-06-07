import React from "react";
import { motion } from "framer-motion";

const Sewa = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, delay: 0.25 }}
      className="flex items-center flex-col pt-10 md:pb-80"
      id="rent"
    >
      <h1 className="text-violet-900 font-bold text-3xl">Contact Me</h1>
      <h2 className="bg-clip-text text-transparent font-bold text-4xl bg-gradient-to-r from-violet-500 to-violet-900 pb-5">
        Sewa Mobil Terbaik
      </h2>
      <div className="sewa-bg flex flex-col items-center justify-between shadow-xl w-10/12 py-9 lg:h-5/6 lg:bg-fixed lg:bg-cover bg-bottom rounded-2xl lg:flex-wrap lg:flex-row lg:justify-evenly">
        <div className="w-1/4 flex items-center justify-center">
          <img src="/Icon.png" alt="Me" className="hidden lg:block" />
        </div>
        <form className="flex flex-col w-3/4 lg:w-1/2 gap-3 lg:items-center">
          <input
            className="px-2 p-1 lg:p-2 rounded-xl dark:text-white dark:bg-neutral-800 border-2 lg:w-full border-[rgba(0,0,0,0.3)] dark:border-[rgba(255,255,255,0.3)]"
            type="text"
            placeholder="Name"
          />
          <input
            className="px-2 p-1 lg:p-2 rounded-xl dark:text-white dark:bg-neutral-800 border-2 lg:w-full border-[rgba(0,0,0,0.3)] dark:border-[rgba(255,255,255,0.3)]"
            type="email"
            placeholder="Email"
          />
          <input
            className="px-2 p-1 lg:p-2 rounded-xl dark:text-white dark:bg-neutral-800 border-2 lg:w-full border-[rgba(0,0,0,0.3)] dark:border-[rgba(255,255,255,0.3)]"
            type="text"
            placeholder="Subject"
          />
          <textarea
            name="text"
            cols="30"
            rows="5"
            placeholder="Detail Sewa"
            className="px-2 lg:p-2 resize-none rounded-xl dark:text-white lg:w-full dark:bg-neutral-800 border-2 border-[rgba(0,0,0,0.3)] dark:border-[rgba(255,255,255,0.3)]"
          ></textarea>
          <input
            type="submit"
            value="Sewa"
            className="rounded-full lg:w-full bg-primary hover:bg-teal-700 p-2 lg:p-2 font-bold text-white dark:text-slate-300 cursor-pointer"
          />
        </form>
      </div>
    </motion.div>
  );
};

export default Sewa;
