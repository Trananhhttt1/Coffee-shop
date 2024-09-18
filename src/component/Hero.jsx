import React, { useState } from "react";
import BgImage from "../asset/bg-slate.png";
import coffeeBlack from "../asset/black.png";
import Navbar from "./Navbar/Navbar";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const Hero = () => {
  const [sidebar, setSidebar] = useState(false);
  const name = "John";
  const age = 25;
  const handleSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <main style={bgImage}>
      <section className=" relative min-h-[750px] w-full">
        <div className="container">
          <Navbar handleSidebar={handleSidebar}></Navbar>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]">
            <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
              <motion.h1
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  damping: 10,
                  stiffness: 100,
                  delay: 1,
                }}
                className="text-7xl font-bold leading-tight ml-14"
              >
                Blvck Tumbler
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  damping: 10,
                  stiffness: 100,
                  delay: 1.2,
                }}
                className="relative"
              >
                <div className="relative z-10 space-x-4">
                  <h1 className="text-2xl">Black lifestyle Lovers,</h1>
                  <h1 className="text-sm opacity-55 leading-loose">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Deleniti enim hic aut voluptate laudantium provident porro
                    labore culpa velit ut natus tenetur dicta non, vitae nostrum
                    incidunt. Suscipit, iusto eligendi.
                  </h1>
                </div>
                <div className="absolute -top-6 -left-10 w-[250px] h-[190px] bg-gray-700/25"></div>
              </motion.div>
            </div>
            <div className="relative">
              <motion.img
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  damping: 10,
                  stiffness: 100,
                  delay: 1.2,
                }}
                src={coffeeBlack}
                alt=""
                className="z-40 relative h-[400px] md:h-[700px] img-shadow"
              />

              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  damping: 10,
                  stiffness: 100,
                  delay: 0.8,
                }}
                className="h-[180px] w-[180px] absolute top-24 -right-16 border-primary rounded-full z-10 border-[20px]"
              ></motion.div>

              <div className="absolute -top-20 lefft-[200px] z-[1] ">
                <h1 className="text-[140px] scale-150 font-bold text-darkGray/40 leading-none">
                  Blvck Tumbler
                </h1>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: -100 }}
              transition={{
                type: "spring",
                damping: 10,
                stiffness: 100,
                delay: 1.2,
              }}
              className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28"
            >
              <h1 className="opacity-0 text-7xl font-bold leading-tight ml-14">
                Blvck Tumbler
              </h1>

              <div className="relative">
                <div className="relative z-10 space-x-4">
                  <h1 className="text-2xl">Black Tumbler</h1>
                  <h1 className="text-sm opacity-55 leading-loose">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Deleniti enim hic aut voluptate laudantium provident porro
                    labore culpa velit ut natus tenetur dicta non.
                  </h1>
                </div>
                <div className="absolute -top-6 -right-10 w-[250px] h-[190px] bg-darkGray/50"></div>
              </div>
            </motion.div>
          </div>
        </div>
        {sidebar && (
          <motion.div
            initial={{ x: "100%" }}
            whileInView={{ x: 0 }}
            className="absolute top-0 right-0 w-[140px] h-full bg-gradient-to-b from-primary/80 to-primaryyDark/80 backdrop-blur-sm z-10"
          >
            <div className=" w-full h-full flex justify-center items-center">
              <div className=" flex flex-col justify-center items-center gap-6 text-white">
                <div className="w-[1px] h-[70px] bg-white"></div>
                <div className=" inline-block p-2 cursor-pointer rounded-full border border-white">
                  <FaFacebook className=" text-2xl" />
                </div>
                <div className="inline-block p-2 cursor-pointer rounded-full border border-white">
                  <FaTwitter className=" text-2xl" />
                </div>
                <div className=" inline-block p-2 cursor-pointer rounded-full border border-white">
                  <FaInstagram className=" text-2xl" />
                </div>
                <div className="w-[1px] h-[70px] bg-white"></div>
              </div>
            </div>
          </motion.div>
        )}
      </section>
    </main>
  );
};

export default Hero;
