import React, { useState } from "react";
import ImageGrid from "./comps/ImageGrid";
import Modal from "./comps/Modal";
import Title from "./comps/Title";
import UploadForm from "./comps/UploadForm";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(true);
  };

  return (
    <div className="App">
      <Title />
      {showForm && <UploadForm setShowForm={setShowForm} />} {/* comment out to remove upload ability */}
      {!showForm && <button onClick={handleClick}>Add Photo</button>}
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default App;
