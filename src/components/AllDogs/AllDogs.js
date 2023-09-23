import React, { useEffect, useState } from "react";
import "./AllDogs.css";

const ImageGallery = () => {
  const [images, setImages] = useState([]);

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

  return (
    <div className="image-gallery">
      {images.map((image) => (
        <img src={image.path} alt="" key={image.id} loading="lazy" />
      ))}
    </div>
  );
};

export default ImageGallery;
