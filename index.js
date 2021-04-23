// A.2.
function merge2String(s1,s2) {
  l= Math.min(s1.length, s2.length)
  merge2String=''
  for (i=0; i<l; i++) {
    merge2String+= s1[i] +s2[i]
  }
  return merge2String +s1[i] +s2[i]
}
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

