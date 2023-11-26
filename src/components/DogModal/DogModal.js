import React from "react";
import "./DogModal.css";

const DogModal = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <img src={image.path} alt="" />
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default DogModal;
