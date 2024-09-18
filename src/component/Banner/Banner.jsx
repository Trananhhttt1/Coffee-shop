import React from "react";
import { motion } from "framer-motion";
import imgBanner from "../../asset/banner.jpg";
import AppStoreImg from "../../asset/app_store.png";
import GgPlayImg from "../../asset/play_store.png";

const BannerStyles = {
  backgroundImage: `url(${imgBanner})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "100%",
  width: "100%",
};

const Banner = () => {
  return (
    <div className="container my-14">
      <div
        style={BannerStyles}
        className=" sm:min-h-[400px]  sm:flex sm:justify-end sm:items-center rounded-xl"
      >
        <div>
          <div className=" space-y-6 max-w-xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="text-2xl text-center sm:text-4xl font-semibold"
            >
              Download the app
            </motion.h1>
            <p className="text-center sm:px-20">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
            </p>
            <div className="flex justify-center items-center gap-4 ">
              <motion.a
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.2,
                }}
                href=""
                className="max-w-[150px] sm: max-W-[120px] ms:max-W-[200px]"
              >
                <img src={AppStoreImg} alt="" />
              </motion.a>
              <motion.a
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.2,
                }}
                href=""
                className="max-w-[150px] sm: max-W-[120px] ms:max-W-[200px]"
              >
                <img src={GgPlayImg} alt="" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
