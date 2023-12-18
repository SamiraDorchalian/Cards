const cardContainerEl = document.querySelector(".card-container");
const card = document.querySelector(".card");

cardContainerEl.innerHTML = `
<div class="card">
    <h3>Hover Me</h3>
    <br>
    <p>You Can Hover Me , :) , Then You Can See My Event</p>
    <div class="layers">
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
    </div>
</div>
`;

const hThreeTag = document.createElement("h3");
hThreeTag.innerText = "Hover Me";
card.appendChild(hThreeTag);

const pTag = document.createElement("p");
pTag.innerText = "You Can Hover Me Too , (: , Then You Can See My Event";
card.appendChild(pTag);

const layersDiv = document.createElement("div");
layersDiv.classList = "layers";
layersDiv.innerHTML = `
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
`;
card.appendChild(layersDiv);
