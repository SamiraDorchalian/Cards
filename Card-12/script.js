const content = document.querySelector(".content");
const cardTwo = document.getElementById("cardTwo");

const card = document.createElement("div");
card.classList = "card";
content.appendChild(card);
const icon = document.createElement("div");
icon.classList = "icon";
icon.innerHTML = `
    <i class="fa fa-user"></i>
`;
card.appendChild(icon);

const title = document.createElement("p");
title.classList = "title";
title.innerText = "Profile";
card.appendChild(title);

const text = document.createElement("p");
text.classList = "text";
text.innerText = "Click to see or edit your profile page.";
card.appendChild(text);

cardTwo.innerHTML = `
    <div class="icon"><i class="fa fa-star"></i></div>
    <p class="title">Favourites</p>
    <p class="text">Check all your favourites in one place.</p>
`;
