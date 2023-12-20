const container = document.querySelector(".container");

const image = document.createElement("div");
image.classList = "image";
image.innerHTML = `
    <img src="./HD-wallpaper-rm-bangtan-sonyeondan-bts-bts-be-bts-fila-bts-life-goes-on-bts-namjoon-bts-rm-kim-namjoon-namjoon-rm-fila.jpg" alt="image">
    <img src="./images (1).jpg" alt="image">
    <img src="./images.jpg" alt="image">
`;
image.style.marginRight = "10px";
container.appendChild(image);
