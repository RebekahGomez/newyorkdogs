import React, { useEffect, useState } from "react";
import DogModal from "../DogModal/dogModal.js";
import "./AllDogs.css";

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Define a function to fetch images from the JSON file
    const fetchImages = async () => {
      try {
        const response = await fetch("/images.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const imageData = await response.json();
        setImages(imageData);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    // Call the fetchImages function
    fetchImages();
  }, []);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  return (
    <div>
      <div className="image-gallery">
        {images.map((image) => (
          <img
            src={image.path}
            alt=""
            key={image.id}
            loading="lazy"
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>
      <DogModal image={selectedImage} onClose={handleCloseModal} />
    </div>
  );
};

export default ImageGallery;
