const jokeContainer = document.getElementById("joke")
const btn = document.getElementById("btn");
const wrapper = document.querySelector(".wrapper");
const sect = document.getElementById("sect");

const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = () => {
  jokeContainer.classList.remove("fade");
  fetch(url)
  .then(data => data.json())
  .then(item => {
    jokeContainer.innerHTML = `${item.joke} &#128514; &#128578; &#128525`
    jokeContainer.classList.add("fade");
  });
}
btn.addEventListener("click", getJoke)

getJoke();


function wrap () {
  wrapper.style.display = "block";
  sect.style.display = "none";
  

}
