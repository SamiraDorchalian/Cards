const star = document.querySelectorAll(".star");
const emoji = document.querySelectorAll(".emoji");
const colors = ["red" , "orange", "lightblue", "lightgreen","green"];

updateRating(0);

star.forEach((star, index) =>{
    star.addEventListener("click", () =>{
        updateRating(index);
    });
});

function updateRating(index){
    star.forEach((star, idx) =>{
        if(idx < index + 1){
            star.classList.add("active");
        }else{
            star.classList.remove("active");
        }
    });
    emoji.forEach(emoji =>{
        emoji.style.transform = `translateX(-${index * 50}px)`;
        emoji.style.backgroundColor = colors[index];
    });
} 