import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const buttonVariant = {
    hover: {
      scale: 1.1,
      textShadow: "0px 0px 10px rgb(200,200,200)",
      boxShadow: "0px 0px 10px rgb(255,255,200)",
      transition: { yoyo: Infinity, duration: 0.3 },
    },
  };

  return (
    <motion.div
      className="home container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 1.5 }}
    >
      <h2>Welcome to Pizza Joint</h2>
      <Link to="/base">
        <motion.button variants={buttonVariant} whileHover="hover">
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
