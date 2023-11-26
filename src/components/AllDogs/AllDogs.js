import React, { useEffect, useState } from "react";
import DogModal from "../DogModal/dogModal.js";
import "./AllDogs.css";

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

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

  const handleImageClick = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
    setCurrentIndex(null);
  };

  const goToNext = () => {
    const newIndex = currentIndex + 1;
    if (newIndex < images.length) {
      setSelectedImage(images[newIndex]);
      setCurrentIndex(newIndex);
    }
  };

  const goToPrevious = () => {
    const newIndex = currentIndex - 1;
    if (newIndex >= 0) {
      setSelectedImage(images[newIndex]);
      setCurrentIndex(newIndex);
    }
  };

  return (
    <div>
      <div className="image-gallery">
        {images.map((image, index) => (
          <img
            src={image.path}
            alt=""
            key={image.id}
            loading="lazy"
            onClick={() => handleImageClick(image, index)}
          />
        ))}
      </div>
      <DogModal
        image={selectedImage}
        onClose={handleCloseModal}
        onNext={goToNext}
        onPrevious={goToPrevious}
      />
    </div>
  );
};

export default ImageGallery;
