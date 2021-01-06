import React from "react";
import { motion } from "framer-motion";

const Modal = ({ selectedImg, setSelectedImg }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };

  return (
    <motion.div
      className="backdrop"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={selectedImg.url} //changed from selectedImg to selectedImg.url
        alt="enlarged pic"
        /* 
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        */
      />
      <div className="caption">{selectedImg.createdAt.seconds}</div>
    </motion.div>
  );
};

export default Modal;
