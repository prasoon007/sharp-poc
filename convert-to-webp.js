const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

async function convertToWebP(inputFilePath, outputFilePath) {
  try {
    await sharp(inputFilePath).webp().toFile(outputFilePath);

    console.log(`Converted ${inputFilePath} to ${outputFilePath}`);
  } catch (error) {
    console.error(`Error converting ${inputFilePath} to WebP:`, error);
  }
}

const inputFilePath = path.join(__dirname, "input-image.jpeg");
const outputFilePath = path.join(__dirname, "output-image.webp");

convertToWebP(inputFilePath, outputFilePath);
