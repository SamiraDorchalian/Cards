const nextEl = document.getElementById("next");
const prevEl = document.getElementById("prev");
const progressBarFront = document.querySelector(".progress-bar-front");

const stepEl = document.querySelectorAll(".step");

let currentChecked = 1;

nextEl.addEventListener("click", () => {
    currentChecked++;

    if(currentChecked > stepEl.length){
        currentChecked = stepEl.length;
    }
    updateStepProgress();
});

prevEl.addEventListener("click", () => {
    currentChecked--;

    if(currentChecked < 1){
        currentChecked = 1;
    }
    updateStepProgress();
});
 
function updateStepProgress(){
    stepEl.forEach((stepEl, idx) => {
        if(idx < currentChecked){
            stepEl.classList.add("checked");
            stepEl.innerHTML = `
            <img src="./images/check-svgrepo-com.svg" alt="image" class="icon-checked" width="28px">
            <small>${
                idx === 0 
                ? "Start" 
                : idx === stepEl.length - 1  
                ? "Final" 
                : "Step " + idx
            }</small>
            `;
        }else{
            stepEl.classList.remove("checked");
            stepEl.innerHTML = `
            <img src="./images/times-svgrepo-com.svg" alt="image" class="icon-step" width="30px">
            `
        }
    });

    const checkedNumber = document.querySelectorAll(".icon-checked");


    progressBarFront.style.width = ((checkedNumber.length -1) / (stepEl.length -1)) * 100 + "%";

    if(currentChecked === 1){
        prevEl.disabled = true;
    }else if(currentChecked === stepEl.length){
        nextEl.disabled = true;
    }else{
        prevEl.dataset = false;
        nextEl.disabled = false;
    }
}