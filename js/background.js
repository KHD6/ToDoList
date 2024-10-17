const images = [
    "bg-img01.jpg",
    "bg-img02.jpg",
    "bg-img03.jpg",
];

const chosenImgage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImgage}`

const imgBox = document.querySelector(".img-box")

imgBox.appendChild(bgImage);