const clearFix = document.querySelector(".clear-fix");

const cardsCardsTwo = document.createElement("div");
cardsCardsTwo.classList = "cards cards--two";
clearFix.appendChild(cardsCardsTwo);
const imgResponsive = document.createElement("img");
imgResponsive.classList = "img-responsive";
imgResponsive.alt = "Cards Image";
imgResponsive.src = "./irs01_s3old_1613417385792483953.jpg";
cardsCardsTwo.appendChild(imgResponsive);
const cardsTwoRect = document.createElement("span");
cardsTwoRect.classList = "cards--two__rect";
cardsCardsTwo.appendChild(cardsTwoRect);
const cardsTwoTri = document.createElement("span");
cardsTwoTri.classList = "cards--two__tri";
cardsCardsTwo.appendChild(cardsTwoTri);
const tagP = document.createElement("p");
tagP.innerText = "min yoongi";
cardsCardsTwo.appendChild(tagP);
const cards__list = document.createElement("ul");
cards__list.classList = "cards__list";
cards__list.innerHTML = `
    <li><i class="fab fa-facebook-f"></i></li>
    <li><i class="fab fa-twitter"></i></li>
    <li><i class="fab fa-instagram"></i></li>
    <li><i class="fab fa-linkedin-in"></i></li>
`;
cardsCardsTwo.appendChild(cards__list);
