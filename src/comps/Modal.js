import React from "react";
import { motion } from "framer-motion";
import Moment from "react-moment";
import deletePic from "../hooks/deletePic";

import useFirestore from "../hooks/useFirestore";

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

  const { docs } = useFirestore("images");

  const previousPicture = () => {
    const reversedDocs = docs.map(doc => doc).reverse();
    
    let found = false;

    let success = reversedDocs.map((doc) => {
      if (found === true) {
        setSelectedImg(doc);
        found = false;
        return true;
      }
      if (doc.id === selectedImg.id) {
        found = true;
      }
      return false;
    });

    console.log(success);
  };

  const nextPicture = () => {
    let found = false;

    let success = docs.map((doc) => {
      if (found === true) {
        setSelectedImg(doc);
        found = false;
        return true;
      }
      if (doc.id === selectedImg.id) {
        found = true;
      }
      return false;
    });

    console.log(success);
  };

  return (
    <motion.div
      className="backdrop"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="location">{selectedImg.location}</div>
      <div className="modal-container">
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

        <button className="button-next" onClick={previousPicture}>
          Prev
        </button>
        <button className="button-next" onClick={nextPicture}>
          Next
        </button>
      </div>
    </motion.div>
  );
};

export default Modal;
