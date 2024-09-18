import React from "react";
import map from "../../asset/world-map.png";
import { motion } from "framer-motion";
const Buy = () => {
  return (
    <div className="container my-36">
      <div className=" grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center">
        <div className="space-y-8 ">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              type: "spring",
              stiffness: 100,
              damping: 10,
            }}
            className="text-4xl font-bold text-darkGray font-serif"
          >
            Buy Our Product from anywhere
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              type: "spring",
              stiffness: 100,
              damping: 10,
            }}
            className="flex items-center gap-4"
          >
            <input
              type="text"
              placeholder="Name"
              className="input-style w-full lg:w-[150px]"
            />
            <input
              type="text"
              placeholder="Email"
              className="input-style w-full "
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.6,
              type: "spring",
              stiffness: 100,
              damping: 10,
            }}
            className="flex items-center gap-4"
          >
            <input
              type="text"
              placeholder="Country"
              className="input-style w-full "
            />
            <input
              type="text"
              placeholder="Zipcode"
              className="input-style w-full lg:w-[150px]"
            />
          </motion.div>
          <motion.button
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 10,
            }}
            className="primary-btn w-full"
          >
            Order Now
          </motion.button>
        </div>
        <div className="col-span-2">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              delay: 0.2,
              damping: 10,
              stiffness: 100,
            }}
            src={map}
            alt=""
            className="w-full sm:w-[500px] mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Buy;
