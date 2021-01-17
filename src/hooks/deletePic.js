import { useState, useEffect } from "react";
import { projectStorage, projectFirestore } from "../firebase/config";

const deletePic = (fileName) => {
  const collectionRef = projectFirestore.collection("images");

  collectionRef.doc(fileName).delete().then(function() {
    console.log("Document successfully deleted!");
}).catch(function(error) {
    console.error("Error removing document: ", error);
});

  return { fileName };
};

export default deletePic;
