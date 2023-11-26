import React from "react";
import "./DogModal.css";

const DogModal = ({ image, onClose, onNext, onPrevious }) => {
  if (!image) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <button onClick={onPrevious} className="modal-nav-button previous">
          {"<"}
        </button>
        <img src={image.path} alt="" />
        <button onClick={onNext} className="modal-nav-button next">
          {">"}
        </button>
        <button onClick={onClose} className="modal-close-button">
          Close
        </button>
      </div>
    </div>
  );
};

export default DogModal;
