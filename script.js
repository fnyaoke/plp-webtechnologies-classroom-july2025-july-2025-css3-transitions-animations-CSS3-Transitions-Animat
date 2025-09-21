
// Part 2: Functions

// Global variable example
let globalMessage = "This is a global variable";

// Function 1: Calculate area (with params + return)
function calculateArea(width, height) {
  // Local variable
  let area = width * height;
  return area;
}

document.getElementById("calcAreaBtn").addEventListener("click", () => {
  let width = parseFloat(prompt("Enter width:"));
  let height = parseFloat(prompt("Enter height:"));
  let result = calculateArea(width, height);
  document.getElementById("areaResult").textContent =
    `${globalMessage}. The area is ${result}`;
});

// Function 2: Toggle animation class
function toggleAnimation(elementId, className) {
  const element = document.getElementById(elementId);
  element.classList.toggle(className);
}

// Part 3: CSS + JS Combined

// Animate box on button click
document.getElementById("animateBoxBtn").addEventListener("click", () => {
  toggleAnimation("animBox", "animate");
});

// Modal popup
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

openModalBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});