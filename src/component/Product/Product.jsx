import React from "react";
import { delay, motion } from "framer-motion";
import coffee1 from "../../asset/coffee1.png";
import coffee3 from "../../asset/coffee3.png";
import { div } from "framer-motion/client";
import { type } from "@testing-library/user-event/dist/type";

const Product = () => {
  const products = [
    {
      id: 1,
      image: coffee1,
      title: "Black Coffee",
      subtitle:
        "Black coffee keeps the brain and nerves active and thus helps enhance memory.",
    },
    {
      id: 2,
      image: coffee3,
      title: "Hot Coffee",
      subtitle:
        "Black coffee keeps the brain and nerves active and thus helps enhance memory.",
    },
    {
      id: 3,
      image: coffee1,
      title: "Cold Coffee",
      subtitle:
        "Black coffee keeps the brain and nerves active and thus helps enhance memory.",
    },
  ];
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 150,
        damping: 10,
        ease: "easeInOut",
      },
    },
  };
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.6,
        staggerChildren: 0.4,
      },
    },
  };
  return (
    <div className="container my-16 space-y-6">
      <div className="text-center max-w-lg mx-auto space-y-2">
        <motion.h1
          initial={{ opacity: 0, y: "-100px" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            damping: 10,
            stiffness: 150,
            delay: 0.4,
          }}
          className="text-3xl font-bold text-lightGray"
        >
          Fresh and <span className="text-primary">Tasty Coffee</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: "-100px" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            damping: 10,
            stiffness: 150,
            delay: 0.8,
          }}
          className="text-sm opacity-50"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          deleniti iusto unde doloribus delectus, velit qui nulla facilis enim
          inventore saepe voluptas tempora earum quod consectetur dolor
          necessitatibus!
        </motion.p>
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ amount: 0.8 }}
        className=" grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-8"
      >
        {products.map((product) => {
          return (
            <motion.div
              variants={cardVariants}
              className="text-center p-4 space-y-6"
            >
              <img
                src={product.image}
                alt=""
                className="img-shadow max-w-[200px] mx-auto hover:scale-110 duration-300 cursor-pointer"
              />
              <div className="space-y-2">
                <h1 className="text-2xl font-bold text-primary">
                  {product.title}
                </h1>
                <p className="text-darkGray">{product.subtitle}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Product;
