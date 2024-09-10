// Counter


var heading = document.querySelector("#headingDisplay")

var count = 0;

function increase() {
    count ++;
    document.querySelector('#counter').innerHTML = count;
}
  
function decrease() {
    count--;
    document.querySelector('#counter').innerHTML  = count;
}