// let modeBtn = document.getElementById("dark-light");

// modeBtn.addEventListener("click", function () {
//   document.body.classList.toggle("dark");
// });

const header = document.querySelector("body");
const menuBtn = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
  header.classList.toggle("open");
});
