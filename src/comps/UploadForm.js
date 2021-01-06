import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState(null);

  const types = ["image/png", "image/jpeg"];

  let selectedLocation = "";

  const handleChange = (event) => {
    selectedLocation = event.target.value;

    //console.log(selectedLocation);
  };

  const changeHandler = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setLocation(selectedLocation);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file (png or jpeg)");
    }

    console.log(file);
    console.log(location);
  };

  return (
    <form>
      <label>
        <input type="text" onChange={handleChange} />
      </label>
      <label className="file-label">
        <input className="file-input" type="file" onChange={changeHandler} />
        <span>+</span>
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;
