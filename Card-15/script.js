const card_group = document.querySelector(".card_group");
const pricing_cardTwo = document.querySelector(".pricing_card");

const pricing_card = document.createElement("div");
pricing_card.classList = "pricing_card";
card_group.appendChild(pricing_card);
const fabFaTelegramPlane = document.createElement("i");
fabFaTelegramPlane.classList = "fab fa-telegram-plane";
pricing_card.appendChild(fabFaTelegramPlane);
const badic = document.createElement("span");
badic.innerText = "Badic";
pricing_card.appendChild(badic);
const price = document.createElement("h4");
price.classList = "price";
price.innerText = "$4.96";
pricing_card.appendChild(price);
const package_list = document.createElement("ul");
package_list.classList = "package_list";
package_list.innerHTML = `
    <li>Unlimited Website</li>
    <li>Unlimited Storage</li>
    <li>Free SSL Certificate</li>
    <li>24/7 Support</li>
`;
pricing_card.appendChild(package_list);
const get_started_btn = document.createElement("a");
get_started_btn.classList = "get_started_btn";
get_started_btn.href = "#";
get_started_btn.innerText = "Get Started";
pricing_card.appendChild(get_started_btn);

pricing_cardTwo.innerHTML = `
    <i class="fas fa-plane"></i>
    <span>Intermediate</span>
    <h4 class="price">$24.56</h4>
    <ul class="package_list">
        <li>Unlimited Website</li>
        <li>Unlimited Storage</li>
        <li>Free SSL Certificate</li>
        <li>24/7 Support</li>
    </ul>
    <a href="#" class="get_started_btn">Get Started</a>
`;
