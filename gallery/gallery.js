let images = ["carnation-red-256x256.jpg", "hawthorn-pink-256x256.avif", "larkspur-blue-256x256.avif"];
let currentImageIndex = 0;
let imgElement;

function setup() {
  noCanvas();
  imgElement = select("#gallery-image");
  let button = select("#gallery-button");
  button.mousePressed(changeImage);
}

function changeImage() {
  currentImageIndex = currentImageIndex + 1;
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
  imgElement.attribute("src", images[currentImageIndex]);
}