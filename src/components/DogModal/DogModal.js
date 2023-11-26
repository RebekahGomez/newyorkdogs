import React from "react";
import "./DogModal.css";

const DogModal = ({ image, onClose, onNext, onPrevious }) => {
  if (!image) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <img src={image.path} alt="" />
        <button onClick={onClose} className="modal-close-button">
          Close
        </button>
        <button onClick={onPrevious} className="modal-nav-button previous">
          Back
        </button>
        <button onClick={onNext} className="modal-nav-button next">
          Next
        </button>
      </div>
    </div>
  );
};

export default DogModal;
