import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PPPContainer = document.querySelector(".container");

function removeElement(element) {
  if (typeof(element) === "string") {
    element = document.querySelector(element);
  }
  return function() {
    element.parentNode.removeChild(element);
  };
}

let tl = gsap.timeline();

tl.to(".hero", {
  scrollTrigger: {
  trigger: ".hero",
  start: "top center",
  end: "center top",
  toggleClass: "visible"
  }
})

tl.to(".section1", {
  scrollTrigger: {
  trigger: ".section1",
  start: "top center",
  end: "center top",
  toggleClass: "visible"
  }
})

.to(".ouf", {
  scrollTrigger: {
      trigger: ".ouf",
      start: "bottom center",
      toggleClass: "normal",
    }
  })


  .to(".ouf", {
    scrollTrigger: {
      trigger: ".ouf2",
      start: "bottom center",
      toggleClass: "normal"
    }
  })

  .to(".ouf", {
    scrollTrigger: {
      trigger: ".antoufle",
      start: "bottom center",
      toggleClass: "normal"
    }
  })


  

  

// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'
// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))
