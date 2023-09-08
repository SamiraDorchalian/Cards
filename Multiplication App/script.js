const questionEl = document.getElementById("question");
const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const scoreEl = document.getElementById("score");

const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

questionEl.innerText = `what is ${num1} multiply by ${num2} ? `;

const correctAns = num1 * num2;

let score = JSON.parse(localStorage.getItem("score"));

if(!score){
    score = 0;
}

scoreEl.innerText = `score: ${score}`;

formEl.addEventListener("submit", () => {
    const userAns = +inputEl.value;

    if(userAns === correctAns){
        score--;
        updatelocalStorage();
    }else{
        score++;
        updatelocalStorage();
    }
});

function updatelocalStorage(){
    localStorage.setItem("score", JSON.stringify(score));
}