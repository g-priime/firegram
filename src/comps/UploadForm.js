import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const types = ["image/png", "image/jpeg"];

  let selectedLocation = null;

  const handleChange = (event) => {
    selectedLocation = event.target.value;
    setLocation(selectedLocation);
    setError("");
  };

  const changeHandler = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file (png or jpeg)");
    }
  };

  const sendData = () => {
    if (file && location) {
      setSubmitted(true);
    } else if (!file) {
      setFile(null);
      setError("Please select an image file (png or jpeg)");
    } else {
      setError("Please enter a location");
    }

    console.log(submitted);
  };

  return (
    <div>
      <form>
        <label>
          Location:{" "}
          <input type="text" value={location} onChange={handleChange} />
        </label>
        <label className="file-label">
          <input className="file-input" type="file" onChange={changeHandler} />
          <span>+</span>
        </label>
        <div className="output">
          {error && <div className="error">{error}</div>}
          {file && <div>{file.name}</div>}
          {submitted && file && location && (
            <ProgressBar
              file={file}
              setFile={setFile}
              location={location}
              setLocation={setLocation}
              setSubmitted={setSubmitted}
            />
          )}
        </div>
      </form>
      <button onClick={sendData}>Submit</button>
    </div>
  );
};

export default UploadForm;
