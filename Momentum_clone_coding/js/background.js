const images = [
  "DSC02641-1.jpg",
  "DSC02701-1.jpg",
  "DSC02748-1.jpg",
  "DSC02791-1.jpg",
  "DSC02825-1.jpg",
  "DSC02918-1.jpg",
  "DSC03095-1.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
