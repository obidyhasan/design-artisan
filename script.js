// Navbar Section
const body = document.querySelector("body");
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".closeBtn");
const navLinks = document.querySelector(".nav-links");

let services = document.querySelector(".services-menu");
services.addEventListener("click", ()=>{
  navLinks.classList.toggle("show-services");
})


menu.addEventListener("click" , () =>{
    nav.classList.add("active");
})

body.addEventListener("click", e =>{

    let clickedElm = e.target;

    if(!clickedElm.classList.contains("menu-btn") && !clickedElm.classList.contains("menu") && !clickedElm.classList.contains("services-menu")){
        nav.classList.remove("active");
    }

})

// On Scroll
window.onscroll=()=>{
  if(window.scrollY>=500){
    nav.classList.add("change-color");
  }
  else{
    nav.classList.remove("change-color")
  }
}


// Typing Animation
// var str = ["innovate . creative . memorable"];
var dot = "•";
var result = dot.fontcolor("#24e900");
var typed = new Typed(".auto-type",{
    strings : ["innovate " + result + " creative " + result + " memorable"],
    typeSpeed : 100,
    backSpeed : 100,
    loop: true,
    loopCount: Infinity,
    smartBackspace: true,
})


// 3D Card Animation
const cardWrapper = document.querySelector(".card-wrapper");
const cursive = document.querySelector(".cursive");
const card = document.querySelector(".card");

card.addEventListener("mousemove", function(e){
  let rect = e.target.getBoundingClientRect();
  let x = e.clientX - rect.left - rect.width / 2;
  let y = e.clientY - rect.top - rect.height / 2;
  
  card.style.transform = `rotateX(${-y / 50}deg) rotateY(${x / 30}deg)`;
});

card.addEventListener("mouseleave", function(){
  card.style.transform = `rotateX(0) rotateY(0)`;
});



// --------------- Scroll Animation ------------------
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
    else{
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));