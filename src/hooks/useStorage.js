import { useState, useEffect } from "react";
import { projectStorage } from "../firebase/config";

const uesStorage = (file) => {
  const [progress, setProgress] = uesState(0);
  const [error, setError] = uesState(null);
  const [url, setUrl] = uesState(null);

  uesEffect(() => {
    // references
    const storageRef = projectStorage.ref(file.name);

    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default uesStorage;
