/*==================
    moving background
  ==================*/

let temp = document.querySelector(".temp");

var container = document.querySelector(".container");

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


/*==================
Toggle filter
==================*/
let filter = document.querySelector('.filter');
filter.addEventListener('click', () => {
filter.classList.toggle('active');
});

// PC or Mobile
let pc = document.querySelector('.PC');
let mobile = document.querySelector('.mobile');
pc.addEventListener('click', () => {
  mobile.classList.remove('active')
  pc.classList.add('active');
  // Activate current event. Close others.
  window.removeEventListener('deviceorientation', mobile_event);
  pc_mouse_event();
});
mobile.addEventListener('click', () => {
  pc.classList.remove('active');
  mobile.classList.add('active');
  // Activate current event. Close others.
  container.removeEventListener("mousemove", pc_event);
  container.removeEventListener("mouseleave", pc_leave);
  mobile_orientation_event();
});

//===================
// Move (PC)
//===================
async function pc_mouse_event() {
  container.addEventListener("mousemove", pc_event);
  // Restore original position
  container.addEventListener("mouseleave", pc_leave);
}
var pc_leave = () => {
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
}
var pc_event  = (e) => {
  // remove restor class
  layer_1.classList.remove("restore");
  layer_2.classList.remove("restore");
  layer_3.classList.remove("restore");
  layer_4.classList.remove("restore");
  // 這裡使用 offset， 因為這樣比較好算 (從0開始)。長寬沒差
  let x = (e.offsetX - container.clientWidth * 0.5) * 1.5;
  let y = (e.offsetY - container.clientHeight * 0.5) * 1.5;
  console.log(e.offsetX,e.offsetY);
  //Layer 1
  layer_1.style.transform = `translate( ${-x * layer_1_x_speed}px, ${-y * layer_1_y_speed}px)`;
  //Layer 2
  layer_2.style.transform = `translate( ${-x * layer_2_x_speed}px, ${-y * layer_2_y_speed}px)`;
  //Layer 3
  layer_3.style.transform = `translate( ${-x * layer_3_x_speed}px, ${-y * layer_3_y_speed}px)`;
  //Layer 4
  layer_4.style.transform = `translate( ${-x * layer_4_x_speed}px, ${-y * layer_4_y_speed}px)`;

}

/*=================
Move (Mobile) (x axis only)
=================*/
async function mobile_orientation_event() {
  // Check if is supported
  if (window.DeviceOrientationEvent) {
    temp.innerHTML = `Yes`;
    window.addEventListener('deviceorientation', mobile_event);
  } else {
    temp.innerHTML = "No";
  }
}
var mobile_event = (e) => {
    let x = e.gamma * 10;
    let y = 0;
    //Debug
    temp.innerHTML = `gamma : ${x.toFixed(2)}`;
    //Layer 1
    layer_1.style.transform = `translate( ${-x * layer_1_x_speed}px, ${-y * layer_1_y_speed}px)`;
    //Layer 2
    layer_2.style.transform = `translate( ${-x * layer_2_x_speed}px, ${-y * layer_2_y_speed}px)`;
    //Layer 3
    layer_3.style.transform = `translate( ${-x * layer_3_x_speed}px, ${-y * layer_3_y_speed}px)`;
    //Layer 4
    layer_4.style.transform = `translate( ${-x * layer_4_x_speed}px, ${-y * layer_4_y_speed}px)`;
}
mobile_orientation_event();