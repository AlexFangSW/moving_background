/*==================
    moving background
  ==================*/

let temp = document.querySelector(".temp");

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
var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    isMobile = true;
}

if (isMobile) {
  mobile_orientation_event();
  temp.innerHTML = "Mobile";
}
else {
  pc_mouse_event();
  temp.innerHTML = "PC";
}

function pc_mouse_event() {
  //===================
  // Move (PC)
  //===================
  let container = document.querySelector(".container");
  container.addEventListener("mousemove", (e) => {
    // remove restor class
    layer_1.classList.remove("restore");
    layer_2.classList.remove("restore");
    layer_3.classList.remove("restore");
    layer_4.classList.remove("restore");
    
    let x = (e.offsetX - container.offsetWidth * 0.5) * 1.5;
    let y = (e.offsetY - container.clientHeight * 0.5) * 1.5;
    //Layer 1
    layer_1.style.transform = `translate( ${-x * layer_1_x_speed}px, ${-y * layer_1_y_speed}px)`;
    //Layer 2
    layer_2.style.transform = `translate( ${-x * layer_2_x_speed}px, ${-y * layer_2_y_speed}px)`;
    //Layer 3
    layer_3.style.transform = `translate( ${-x * layer_3_x_speed}px, ${-y * layer_3_y_speed}px)`;
    //Layer 4
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
}

function mobile_orientation_event() {
  /*=================
  Move (Mobile) (x axis only)
  =================*/
  // Check if is supported
  if (window.DeviceOrientationEvent) {
    // temp.innerHTML = "Yes";
    window.addEventListener('deviceorientation', (e) => {
      let x = e.gamma * 10;
      // let y = e.beta;
      // y = y * 10
      let y = 0;

      console.log(x, y);
      //Layer 1
      layer_1.style.transform = `translate( ${-x * layer_1_x_speed}px, ${-y * layer_1_y_speed}px)`;
      //Layer 2
      layer_2.style.transform = `translate( ${-x * layer_2_x_speed}px, ${-y * layer_2_y_speed}px)`;
      //Layer 3
      layer_3.style.transform = `translate( ${-x * layer_3_x_speed}px, ${-y * layer_3_y_speed}px)`;
      //Layer 4
      layer_4.style.transform = `translate( ${-x * layer_4_x_speed}px, ${-y * layer_4_y_speed}px)`;

    });
  } else {
    // temp.innerHTML = "No";
  }
}

