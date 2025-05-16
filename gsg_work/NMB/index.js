let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el"); 
let count = 0;
function increment() {
  count+=1;
  countEl.textContent = count;
}

function save() {
  let countStr = count + " - "
  saveEl.textContent += countStr
  countEl.textContent += countStr;
  count=0; 
}

console.log("lets count people on the subway")