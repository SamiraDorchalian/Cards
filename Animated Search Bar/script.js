const searchBarContainer = document.querySelector(".search-bar-container");
const magnifierEl = document.querySelector(".magnifier");

searchBarContainer.addEventListener("click", ()=>{
    searchBarContainer.classList.toggle("active");
});