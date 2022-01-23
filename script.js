/*==================
    moving background
  ==================*/
let layer_1 = document.querySelector("svg #Layer-1");
let layer_2 = document.querySelector("svg #Layer-2");
let layer_3 = document.querySelector("svg #Layer-3");
let layer_4 = document.querySelector("svg #Layer-4");
// distance object move slower
const diff_y = 0.05;
const diff_x = 0.15;
const layer_1_x_speed = diff_x;
const layer_1_y_speed = diff_y;
const layer_2_x_speed = diff_x * 0.8;
const layer_2_y_speed = diff_y * 0.8;
const layer_3_x_speed = diff_x * 0.6;
const layer_3_y_speed = diff_y * 0.6;
const layer_4_x_speed = diff_x * 0.4;
const layer_4_y_speed = diff_y * 0.4;

// Move
let container = document.querySelector(".container");
container.addEventListener("mousemove", (e) => {
  // remove restor class
  layer_1.classList.remove("restore");
  layer_2.classList.remove("restore");
  layer_3.classList.remove("restore");
  layer_4.classList.remove("restore");
  
  let x = e.offsetX - container.offsetWidth * 0.5;
  let y = e.offsetY - container.clientHeight * 0.5;
  //Layer 1
  layer_1.style.transform = `translate( ${-x * layer_1_x_speed}px, ${-y * layer_1_y_speed}px)`;
  //Layer 1
  layer_2.style.transform = `translate( ${-x * layer_2_x_speed}px, ${-y * layer_2_y_speed}px)`;
  //Layer 1
  layer_3.style.transform = `translate( ${-x * layer_3_x_speed}px, ${-y * layer_3_y_speed}px)`;
  //Layer 1
  layer_4.style.transform = `translate( ${-x * layer_4_x_speed}px, ${-y * layer_4_y_speed}px)`;
});

// Restore original position
container.addEventListener("mouseleave", () => {
  // Add restor class
  layer_1.classList.add("restore");
  layer_2.classList.add("restore");
  layer_3.classList.add("restore");
  layer_4.classList.add("restore");
  // Restore position
  layer_1.style.transform = "translate(0,0)";
  layer_2.style.transform = "translate(0,0)";
  layer_3.style.transform = "translate(0,0)";
  layer_4.style.transform = "translate(0,0)";
});
/*==================
    Toggle filter
  ==================*/
let filter = document.querySelector('.filter');
filter.addEventListener('click', () => {
  filter.classList.toggle('active');
});