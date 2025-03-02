import React from "react";
import { motion } from "framer-motion";
import rules from "../assets/images/image-rules.svg";
import close from "../assets/images/icon-close.svg";

const Rules = ({ setRules }) => {
  return (
    <motion.div
      className="w-full h-screen fixed top-0 z-20 bg-white sm:bg-black sm:bg-opacity-80 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <motion.div
        className="rulesContainer relative w-fit bg-white p-5 rounded-lg shadow-lg"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <h2 className="text-blue-950 text-lg md:text-xl font-semibold">Rules</h2>
        <img src={rules} alt="Rules" />
        <button
          onClick={() => setRules(false)}
          className="absolute top-[1.8rem] right-[1.5rem] cursor-pointer border-none"
        >
          <img src={close} alt="Close" />
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Rules;
