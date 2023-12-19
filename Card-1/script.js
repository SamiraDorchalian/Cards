const text = document.getElementById("text");

const hTwo = document.createElement("h2");
hTwo.innertext = "Please cooperate in this project";
const hThree = document.createElement("h3");
hThree.innerText = "Type of information: service";
const pEl = document.createElement("p");
pEl.innerText = "Information will be uploaded soon, please be patient.";
const buttonEl = document.createElement("button");
const tagA = document.createElement("a");
tagA.innerText = "Information About South Korea";
tagA.href =
  "https://fa.wikipedia.org/wiki/%DA%A9%D8%B1%D9%87_%D8%AC%D9%86%D9%88%D8%A8%DB%8C";

text.appendChild(hTwo);
text.appendChild(hThree);
text.appendChild(pEl);
text.appendChild(buttonEl);
buttonEl.appendChild(tagA);

// text.innerHTML = `
//     <h2>Please cooperate in this project</h2>
//     <h3>Type of information: service</h3>
//     <p>Information will be uploaded soon, please be patient.</p>
//     <button">Information About South Korea</button>
// `;
