import React from "react";
import "./DogModal.css";

const DogModal = ({ image, onClose, onNext, onPrevious }) => {
  if (!image) return null;

  return (
    <div className="modal-backdrop">
      <button onClick={onPrevious} className="modal-nav-button previous">
        {"<"}
      </button>

      <div className="modal-content">
        <img src={image.path} alt="" />
        <button onClick={onClose} className="modal-close-button">
          Close
        </button>
      </div>
      <button onClick={onNext} className="modal-nav-button next">
        {">"}
      </button>
    </div>
  );
};

export default DogModal;
