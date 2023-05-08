// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const synth = window.speechSynthesis;
  const inputTxt = document.querySelector("textarea");
  const voice = document.querySelector("select");
  const button = document.querySelector("button");
  const image = document.querySelector("img");
  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();
  
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }
  
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voice.appendChild(option);
    }
  }
  populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}
  button.addEventListener("click",(e)=>{
    image.src = `assets/images/smiling-open.png`;
    e.preventDefault();

    const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
    const selectedOption = voice.selectedOptions[0].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    synth.speak(utterThis);
    utterThis.addEventListener("end",(e)=>{
      image.src = `assets/images/smiling.png`;
    })
  });
  
}