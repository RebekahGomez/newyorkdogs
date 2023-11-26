import React from "react";
import "./DogCard.css";

const DogCard = ({ dog, onDetailsClick }) => {
  return (
    <div className="dog-card">
      <h3>{dog.title}</h3>
      <img src={dog.image} alt={dog.title} className="dog-image" />
      <button onClick={onDetailsClick}>Details</button>
    </div>
  );
};

export default DogCard;
