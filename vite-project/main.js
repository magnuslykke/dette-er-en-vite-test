// import './style.css'
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

import rough from "roughjs";
const rc = rough.canvas(document.getElementById("canvas"));
rc.rectangle(10, 10, 480, 200, {
  fill: "yellow",
}); // x, y, width, height

rc.rectangle(50, 50, 100, 100, {
  fill: "white",
  fillStyle: "solid",
});

rc.rectangle(200, 50, 100, 100, {
  fill: "white",
  fillStyle: "solid",
});

rc.rectangle(350, 50, 100, 100, {
  fill: "white",
  fillStyle: "solid",
});

rc.circle(100, 220, 70, {
  fill: "black",
  fillStyle: "solid",
}); // centerX, centerY, diameter

rc.circle(475, 180, 30, {
  fill: "red",
}); // centerX, centerY, diameter

// rc.circle(320, 220, 50); // centerX, centerY, diameter

rc.circle(400, 220, 70, {
  fill: "black",
  fillStyle: "solid",
}); // centerX, centerY, diameter

// rc.ellipse(300, 100, 150, 80); // centerX, centerY, width, height
// rc.line(150, 120, 400, 100); // x1, y1, x2, y2

rc.rectangle(100, 110, 20, 20, {
  fill: "pink",
  fillStyle: "solid",
});

rc.circle(105, 120, 4, {
  fill: "black",
  fillStyle: "solid",
});

rc.circle(115, 120, 4, {
  fill: "black",
  fillStyle: "solid",
});

rc.line(110, 130, 110, 150);

rc.line(90, 140, 130, 140);

rc.rectangle(250, 110, 20, 20, {
  fill: "pink",
  fillStyle: "solid",
});

rc.circle(255, 120, 4, {
  fill: "black",
  fillStyle: "solid",
});

rc.circle(265, 120, 4, {
  fill: "black",
  fillStyle: "solid",
});

rc.line(260, 130, 260, 150);

rc.line(250, 140, 270, 140);
