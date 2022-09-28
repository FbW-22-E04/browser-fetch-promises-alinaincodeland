// The following line makes sure your styles are included in the project. Don't remove this.
import "../styles/main.scss";
// Import any additional modules you want to include below \/

// \/ All of your javascript should go here \/

const modal = document.querySelector("#myModal");
const close = document.querySelector(".close");
console.log(modal);

const displayPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, 60000);
});

displayPromise.then(() => {
  modal.style.display = "block";
});

const closeWindow = () => {
  modal.style.display = "none";
};

close.addEventListener("click", closeWindow);

// 10 seconds you change the  color of h2
// 1. blue
// 2. red
// 3. black

const h2 = document.querySelector("h2");

function tenSec() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 10000);
  });
}

let colors = ["blue", "red", "black"];
let colorIdx = 0;

function changeToNextColor() {
  tenSec().then(() => {
    changeH2Color(colors[colorIdx]);
    colorIdx = (colorIdx + 1) % colors.length;
    changeToNextColor();
  });
}

changeToNextColor();

function changeH2Color(color) {
  h2.style.color = color;
}
