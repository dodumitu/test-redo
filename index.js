let x = Math.floor(Math.random()*10)+ 1;
function getInput($event) {
let y = document.getElementById("inputNum").value;
  if (x ==y) {
    document.getElementById("result").innerHTML =
      "Chúc mừng, bạn đã trúng thưởng";
  } else {
    document.getElementById("result").innerHTML = "Chúc bạn may mắn lần sau";
  }
}

