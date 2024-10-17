const bgimages = [
    "bg-img01.jpg",
    "bg-img02.jpg",
    "bg-img03.jpg",
];

const chosenBgImgage = bgimages[Math.floor(Math.random() * bgimages.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenBgImgage}`

const bgImgBox = document.querySelector(".img-box")

bgImgBox.appendChild(bgImage);