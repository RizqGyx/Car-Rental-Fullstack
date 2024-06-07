import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="wrap-Hero" id="beranda">
      <div className="hero h-[70vh] md:h-[100vh] w-11/12 mx-auto">
        <div className="hero-content">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: -75 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.25 }}
              className="text-4xl md:text-6xl font-bold text-white lg:w-3/4 m-auto"
            >
              Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 75 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.25 }}
              viewport={{ once: false }}
              className="py-6 text-base md:text-lg text-yellow-100 lg:w-3/4 m-auto border-t-4 mt-2 border-violet-700 md:rounded-full"
            >
              Selamat datang di Binar Car Rental. Kami menyediakan mobil
              kualitas terbaik dengan harga terjangkau. Selalu siap melayani
              kebutuhanmu untuk sewa mobil selama 24 jam.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              viewport={{ once: false }}
              className="flex gap-8 justify-center"
            >
              <motion.a whileHover={{ scale: 1.1 }} href="/#restaurant">
                <button className="btn bg-violet-900 rounded-full hover:bg-violet-700 sm:w-40 text-white font-bold border-none">
                  Sewa Mobil
                </button>
              </motion.a>
              <motion.a whileHover={{ scale: 1.1 }} href="/#book">
                <button className="btn bg-white rounded-full sm:w-40 text-violet-900 hover:text-red-700 hover:bg-white hover:border-red-700 font-bold border-2 border-violet-900">
                  Tambah Favorit
                </button>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
