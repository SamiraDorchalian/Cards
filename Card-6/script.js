const panel2El = document.getElementById("panel2");
const panel3El = document.getElementById("panel3");

const ringEl = document.createElement("div");
ringEl.classList = "ring";
panel2El.appendChild(ringEl);

const cardCard2El = document.createElement("div");
cardCard2El.classList = "card card2";
ringEl.appendChild(cardCard2El);

const borderEl = document.createElement("div");
borderEl.classList = "border";
ringEl.appendChild(borderEl);

const titleEl = document.createElement("p");
titleEl.classList = "title";
titleEl.innerText = "Seoul";
titleEl.style.color = "#023e8a";
borderEl.appendChild(titleEl);

const slideEl = document.createElement("div");
slideEl.classList = "slide";
borderEl.appendChild(slideEl);

const h6El = document.createElement("h6");
h6El.classList = "para";
h6El.innerText = "Latest Deals from Heathrow";
slideEl.appendChild(h6El);

const lineEl = document.createElement("div");
lineEl.classList = "line";
lineEl.innerHTML = `
    <h6 class="para">OUT</h6> <i class="fa fa-plane" aria-hidden="true"></i>
    <h6 class="para">$400</h6>
`;
lineEl.style.color = "#03071e";
slideEl.appendChild(lineEl);

const lineEl2 = document.createElement("div");
lineEl2.classList = "line";
lineEl2.innerHTML = `
    <h6 class="para">RTN</h6> <i class="fa fa-plane" aria-hidden="true"></i>
    <h6 class="para">$500</h6>
`;
lineEl2.style.color = "#03071e";
slideEl.appendChild(lineEl2);

panel3El.innerHTML = `
    <div class="ring">
        <div class="card card3"></div>
        <div class="border">
            <p class="title">Seoul</p>
            <div class="slide">
                <h6 class="para">Latest Deals from Heathrow</h6>
                <div class="line">
                    <h6 class="para">OUT</h6> <i class="fa fa-plane" aria-hidden="true"></i>
                    <h6 class="para">$800</h6>
                </div>
                <div class="line">
                    <h6 class="para">RTN</h6> <i class="fa fa-plane" aria-hidden="true"></i>
                    <h6 class="para">$600</h6>
                </div>
            </div>
        </div>
    </div>
`;
