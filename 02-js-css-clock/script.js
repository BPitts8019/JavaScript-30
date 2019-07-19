function init () {
   const hourHand = {
      name: "Hour Hand",
      count: 0,
      hand: document.querySelector(".hour-hand"),
      nextHand: null,
      moveMe: moveHand
   };
   const minuteHand = {
      name: "Minute Hand",
      count: 0,
      hand: document.querySelector(".min-hand"),
      nextHand: hourHand,
      moveMe: moveHand
   };
   const secondHand = {
      name: "Second Hand",
      count: 0,
      hand: document.querySelector(".second-hand"),
      nextHand: minuteHand,
      moveMe: moveHand
   };

   function moveHand () {
      console.log(`${this.name} count: ${this.count}.`);
      
      this.count += 6;
      if (this.count >= 360) {
         this.count = 0;
         if (this.nextHand) this.nextHand.moveMe();
      }
      this.hand.style.transform = `rotate(${this.count}deg)`;
   }

   window.clock = setInterval(() => {
      secondHand.moveMe();
   }, 1000);
}

// initialization
window.addEventListener("load", event => {
   init();
});