let portFolio1 = document.getElementById("portfolio_detail_01");

window.addEventListener("scroll", function (){
  let value = window.scrollY
  console.log("scrollY",value);

  if(value > 1500) {
    portFolio1.style.animation = "disAppear 1s ease-out forwards";
  }else {
    portFolio1.style.animation = `slide 1s ease-out`;
  }
  
});