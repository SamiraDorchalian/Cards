const box = document.querySelector(".box");

const card = document.createElement("div");
card.classList = "card";
box.appendChild(card);
const imgBx = document.createElement("div");
imgBx.classList = "imgBx";
imgBx.innerHTML = `
    <img src="./desktop-wallpaper-jin-bts-discovered-bts-jin-black-thumbnail.jpg" alt="images" />
`;
card.appendChild(imgBx);
const details = document.createElement("div");
details.classList = "details";
details.innerHTML = `
    <h2>SomeOne Famous<br/><span>Director</span></h2>
`;
card.appendChild(details);

const cardTwo = document.createElement("div");
cardTwo.classList = "card";
cardTwo.innerHTML = `
    <div class="imgBx">
        <img src="./main-qimg-b02774b4726a2c8c37029ffd0fd2941f-lq.jpg" alt="images" />
    </div>
    <div class="details">
        <h2>SomeOne Famous<br/><span>Actor</span></h2>
    </div>
`;
box.appendChild(cardTwo);
