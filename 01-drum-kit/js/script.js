function setupEventListeners () {

   document.addEventListener("keypress", event => {
      const button =document.querySelector(`div[data-key='${event.keyCode}']`); 
      const sound = document.querySelector(`audio[data-key='${event.keyCode}']`);
      
      if (button && sound) {
         button.classList.add("playing");
         sound.play();
      }
   });

   document.addEventListener("keyup", event => {
      const button = document.querySelector(`div[data-key='${event.keyCode}']`);
      const sound = document.querySelector(`audio[data-key='${event.keyCode}']`);
      
      if (button && sound) {
         button.classList.remove("playing");
         sound.pause();
         sound.currentTime = 0;
      }
   });
}


// initialization
window.addEventListener("load", event => {
   setupEventListeners();
});