const btn = document.querySelector(".slider");
const body = document.body;
const social = document.querySelectorAll(".social");
const stats = document.querySelectorAll(".stats");
const heading = document.getElementById("heading");
const bigNumbers = document.querySelectorAll(".big-number");
const smallNumbers = document.querySelectorAll(".small-number");

btn.addEventListener("click", () => {
  body.classList.toggle("body-bg");
  heading.classList.toggle("dark");

  bigNumbers.forEach((element) => {
    element.classList.toggle("dark");
  });

  smallNumbers.forEach((element) => {
    element.classList.toggle("dark");
  });

  social.forEach((element) => {
    element.classList.toggle("dark-card");
  });

  stats.forEach((element) => {
    element.classList.toggle("dark-card");
  });
});
