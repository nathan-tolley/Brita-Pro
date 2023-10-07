var nav = $("header");

if (window.scrollY > 50) {
  if(nav[0].classList.contains("bg-opacity-0")){
    nav[0].classList.remove("bg-opacity-0")
    nav[0].classList.add("bg-opacity-100")
  }
} else {
  if(nav[0].classList.contains("bg-opacity-100")){   
    nav[0].classList.remove("bg-opacity-100")
    nav[0].classList.add("bg-opacity-0")
  }
}

window.addEventListener("scroll", ()=>{
  if (window.scrollY > 50) {
    if(nav[0].classList.contains("bg-opacity-0")){
      nav[0].classList.remove("bg-opacity-0")
      nav[0].classList.add("bg-opacity-100")
    }
  } else {
    if(nav[0].classList.contains("bg-opacity-100")){   
      nav[0].classList.remove("bg-opacity-100")
      nav[0].classList.add("bg-opacity-0")
    }
  }
})

const lenis = new Lenis({ 
  duration: 1.2, 
  easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
  orientation: "vertical", 
  gestureOrientation: "vertical", 
  smoothWheel: true, 
  smoothTouch: false, 
  touchMultiplier: 2, 
}); 

function raf(time) { 
  lenis.raf(time); requestAnimationFrame(raf); 
} 

requestAnimationFrame(raf);