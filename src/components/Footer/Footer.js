import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; Rebekah Gomez 2023</p>
      <p>
        Contact me via{" "}
        <a
          href="https://www.linkedin.com/in/rebekah-gomez/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </p>
    </footer>
  );
};

export default Footer;
