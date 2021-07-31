const add = document.getElementById("add");
const minus = document.getElementById("minus");
const num = document.querySelector("span");

let count = 0;
num.innerHTML = count;

function update() {
  num.innerHTML = count;
}

add.addEventListener("click", function add(){
  count = count + 1;
  update();
})

minus.addEventListener("click", function minus(){
  count = count - 1;
  update();
})