import React from "react";
import List from "../components/List";
import { motion } from "framer-motion";

function Aboutus() {
  return (
    <div className="w-11/12 pt-10 mx-auto" id="about">
      <div className="container mx-auto flex items-center">
        <div className="flex flex-col items-center md:justify-evenly md:flex-row md:space-x-8 w-full">
          <motion.div
            initial={{ opacity: 0, x: -75 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.25 }}
            className="w-full lg:w-1/3"
          >
            <img
              src="/img_service.png"
              alt="About Us"
              className="rounded-lg shadow-md mx-auto w-full object-contain md:w-auto"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 75 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.25 }}
            className="w-full md:w-1/2 mt-4 md:mt-0"
          >
            <h2 className="text-4xl text-violet-900 font-bold mb-4">
              Best Car Rental for any kind of trip in (Lokasimu)!
            </h2>
            <p className="text-lg text-black/80 font-semibold">
              Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
              lebih murah dibandingkan yang lain, kondisi mobil baru, serta
              kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
              wedding, meeting, dll.
            </p>
            <div className="flex flex-col gap-2 mt-2">
              <List text={"Sewa Mobil Dengan Supir di Bali 12 Jam"} />
              <List text={"Sewa Mobil Lepas Kunci di Bali 24 Jam"} />
              <List text={"Sewa Mobil Jangka Panjang Bulanan"} />
              <List text={"Gratis Antar - Jemput Mobil di Bandara"} />
              <List text={"Layanan Airport Transfer / Drop In Out"} />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
