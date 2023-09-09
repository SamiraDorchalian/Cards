const containerEl = document.querySelector(".container");

for (let index = 0; index < 100; index++) {
    const colorContainerEl = document.createElement("div");
    colorContainerEl.classList.add("color-container");
    containerEl.appendChild(colorContainerEl);
}

const colorContainerEls = document.querySelectorAll(".color-container");

generateColors();

function generateColors(){
    colorContainerEls.forEach((colorContainerEl) => {
        const newColrerCode = randomColor();
        colorContainerEl.style.backgroundColor = "#" + newColrerCode;
        colorContainerEl.innerText = "#" + newColrerCode;
    });
}

function randomColor(){
    const chars = "0123456789abcdef";
    const colorCodeLenght = 6;
    let colorCode = "";
    for (let index = 0; index < colorCodeLenght; index++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        colorCode += chars.substring(randomNum, randomNum + 1);
    }
    return colorCode;
}
