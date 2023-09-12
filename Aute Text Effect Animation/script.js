const containerEl = document.querySelector(".container");

const careers = ["Student","Developer","programmer","freelancer","engineer","instructor"];

let careerIndex = 0;
let characterIndex = 0;

function updataText(){
    characterIndex++;

    containerEl.innerHTML = `
    <h1>I am 
    ${careers[careerIndex].slice(0,1) === "I" ? "an" : "a"} 
    ${careers[careerIndex].slice(0,characterIndex)}</h1>
    `;

    if(characterIndex === careers[careerIndex].length){
        careerIndex++;
        characterIndex = 0;
    }
    if(careerIndex === careers.length){
        careerIndex = 0;
    }
    setTimeout(updataText, 400);
}

updataText();