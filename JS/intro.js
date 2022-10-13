
let horizonUnderLine = document.getElementById("horizon_underline");

let horizonMenus = document.getElementById("MenuList li");


console.log(horizonMenus);

horizonMenus.forEach()(menu => menu.addEventListener("click",(e) => horizonIndicator(e)));

function horizonIndicator(e) {
  horizonUnderLine.style.left = e.currentTarget.offsetleft + "px";
  horizonUnderLine.style.width = e.currentTarget.offsetWidth + "px";
  horizonUnderLine.style.top = e.currentTarget + e.currentTarget.offsetHeight + "px";
};