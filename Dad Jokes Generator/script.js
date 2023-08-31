const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "niApKm6c7pWKzu7UdG1Mog==JGj6XG06UVeZbaMt";

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

const options = {
    method : "GET",
    headers : {
        "X-Api-Key": apiKey,
    },
};

async function getJoke(){

    try {
        jokeEl.innerText = "Updating ...!";

        btnEl.disabled = true;
        btnEl.innerText = "Loading ...!";

        const response = await fetch(apiURL, options);
        const data = await response.json();

        btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke";

        console.log(data[0].joke);
        jokeEl.innerText = data[0].joke;

    } catch (error) {
        jokeEl.innerText = "An error happend, try again later";

        btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke";

        console.log(error);
    }
}

btnEl.addEventListener("click", getJoke);