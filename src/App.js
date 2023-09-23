import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ImageGallery from "./components/AllDogs/AllDogs";

function App() {
  return (
    <div>
      <Navbar />
      <ImageGallery />
      <Footer />
    </div>
  );
}

export default App;
