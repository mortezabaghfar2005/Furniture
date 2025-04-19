/  -- Hamburger Menu  -- /

let input = document.getElementById("#toggle-nav");

let linetop = document.querySelector(".line-top");

let linecenter = document.querySelector(".line-center");

let linebottom = document.querySelector(".line-bottom");

function test() {
  linetop.classList.toggle("line1");
  
  linecenter.classList.toggle("line2");
  
  linebottom.classList.toggle("line3");
  
}



/-- Scroll --/

let CustomScroll = document.querySelector(".scroll")

window.addEventListener("scroll", function(){
  let ScrollTop = window.scrollY;

  let DocumentHeight = document.body.clientHeight;

  let WindowHeight = window.innerHeight;

  let ScrollPercent = ScrollTop / (DocumentHeight - WindowHeight);

  let Rounded = Math.round(ScrollPercent * 100);

  CustomScroll.style.width = Rounded 

})