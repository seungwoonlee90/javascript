import {createStore} from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const num = document.querySelector("span");

num.innerText = 0;

// reducer's role : changes my data
function countModifier(count = 0, action) {
  switch (action.type) {
    case "ADD" :
      return count + 1;
    case "MINUS" :
      return count - 1;
    default :
      return count;
  }
}

function onChange(){
  num.innerText = countStore.getState();
}

const countStore = createStore(countModifier);
countStore.subscribe(onChange);

add.addEventListener("click", function(){
  countStore.dispatch({type : "ADD"});
})

minus.addEventListener("click", function(){
  countStore.dispatch({type : "MINUS"});
})