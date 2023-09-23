const fs = require("fs");
const path = require("path");

const imagesDir = path.resolve(__dirname, "../../public/images");
const jsonFilePath = path.resolve(__dirname, "./images.json");

// Read the existing JSON file
let jsonData;
try {
  jsonData = JSON.parse(fs.readFileSync(jsonFilePath, "utf8"));
} catch (err) {
  jsonData = [];
}

// Read the image files in the directory
const imageFiles = fs
  .readdirSync(imagesDir)
  .filter((file) => file.endsWith(".jpg"));

// Create a Set of image paths that currently exist in the directory
const currentImagePaths = new Set(imageFiles.map((file) => `/images/${file}`));

// Filter jsonData to keep only entries whose paths exist in currentImagePaths
jsonData = jsonData.filter((entry) => currentImagePaths.has(entry.path));

// Iterate over the image files and prepend new entries to the JSON data array
imageFiles.forEach((file) => {
  const imagePath = `/images/${file}`; // The path is relative to the public directory
  if (!jsonData.some((entry) => entry.path === imagePath)) {
    jsonData.unshift({
      path: imagePath,
      // Add any other metadata fields you need
    });
  }
});

// Write the updated JSON data back to the file
fs.writeFileSync(jsonFilePath, JSON.stringify(jsonData, null, 2));
