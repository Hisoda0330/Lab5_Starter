// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const horn = document.getElementById("horn-select");
  const image = document.querySelector("img");
  const sound = document.querySelector("audio");
  const button = document.querySelector("button");
  const volume_range = document.getElementById("volume");
  const volume_img = document.querySelector('#volume-controls img');
  const canvas = document.getElementById('yout_cusom_canvas_id');
  const jsConfetti = new JSConfetti({canvas});
  
  horn.addEventListener("change",(e)=>{
    image.src = `assets/images/${e.target.value}.svg`;
    sound.src = `assets/audio/${e.target.value}.mp3`;
  });
  
  volume_range.addEventListener("change",(e)=>{
    

    if(volume_range.value == 0){
      volume_img.src = `assets/icons/volume-level-0.svg`;
    }
    else if(volume_range.value < 33){
      volume_img.src = `assets/icons/volume-level-1.svg`;
    }
    else if(volume_range.value >= 33 && volume_range.value < 67){
      volume_img.src = `assets/icons/volume-level-2.svg`;
    }
    else if(volume_range.value >= 66){
      volume_img.src = `assets/icons/volume-level-3.svg`;
    }
    sound.value = volume_range/100;
  })
  button.addEventListener("click",(e)=>{
    sound.play();
    if(horn.value == "party-horn"){
      jsConfetti.addConfetti({confettiRadius: 4, confettiNumber: 1000});
    }
  }
  );
}



 