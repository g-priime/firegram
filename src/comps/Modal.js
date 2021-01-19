import React from "react";
import { motion } from "framer-motion";
import Moment from "react-moment";
import deletePic from "../hooks/deletePic";

const Modal = ({ selectedImg, setSelectedImg }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };

  const deletePicture = () => {
    const { fileName } = deletePic(selectedImg.name);
    setSelectedImg(null);

    console.log(fileName);
  };

  return (
    <motion.div
      className="backdrop"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="location">{selectedImg.location}</div>
      <motion.img
        src={selectedImg.url} //changed from selectedImg to selectedImg.url
        alt="enlarged pic"
        /* 
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        */
      />
      <div className="caption-grid">
        <div className="caption">
          <Moment unix format="MMM DD, YYYY">
            {selectedImg.createdAt.seconds}
          </Moment>
        </div>
        <button className="button-delete" onClick={deletePicture}>
          Delete
        </button>
      </div>
    </motion.div>
  );
};

export default Modal;
