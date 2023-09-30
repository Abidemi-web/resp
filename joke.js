const jokeContainer = document.getElementById("joke")
const btn = document.getElementById("btn");
const wrapper = document.querySelector(".wrapper");
const sect = document.getElementById("sect");
const btns = document.getElementById("btns");

const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = () => {
  jokeContainer.classList.remove("fade");
  fetch(url)
  .then(data => data.json())
  .then(item => {
    jokeContainer.innerHTML = `${item.joke} &#128514; &#128578; &#128525`
    jokeContainer.classList.add("fade");

  let utterance = new SpeechSynthesisUtterance(item.joke);
  utterance.voice = voices[4];
  utterance.lang = voices[4].lang;
  window.speechSynthesis.speak(utterance);
  

  
  
  });
  
 
}


window.speechSynthesis.onvoiceschanged = function() {
  voices = window.speechSynthesis.getVoices()
  
  
 };
 function getIt() {
  window.speechSynthesis.cancel();
 }

btn.addEventListener("click", getJoke)
getJoke()





function wrap () {
  wrapper.style.display = "block";
  sect.style.display = "none";
  

}




// const text = 'Her name is Simplicity Treasure'
 

// function getItt() {
 
  
//   let utterance = new SpeechSynthesisUtterance(text)
//  utterance.voice = voices[5];
//  utterance.lang = voices[4].lang;
//  window.speechSynthesis.speak(utterance);

// }
// window.speechSynthesis.onvoiceschanged = function() {
//   voices = window.speechSynthesis.getVoices()
  
//  };