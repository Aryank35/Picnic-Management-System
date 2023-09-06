let slide = document.getElementsByClassName("slide");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
let counter = 0;

prevBtn.addEventListener('click',()=>{
   counter -= 1;
   slideShow(counter);
});

nextBtn.addEventListener('click',()=>{
  counter += 1
  slideShow(counter);
});

slideShow(counter);

function slideShow(num){

  if(num < 0){
    num = slide.length-1;
    counter = slide.length-1;
  }

  if(num == slide.length){
    num = 0;
    counter = 0;
  }

  for(let y of slide){
    y.style.display = "none";
  }

  slide[num].style.display = "block";
}

// nav-menu 

const navList = document.getElementById("navList");
const openMenu = document.getElementById("sideBar");
const closeMenu = document.getElementById("cross");

openMenu.addEventListener("click",()=>{
  sideBar.classList.add("hidden");
  navList.classList.remove("hidden");
  navList.classList.add("translate-x-0")
})

closeMenu.addEventListener("click",()=>{
  sideBar.classList.remove("hidden");
  navList.classList.add("hidden");
})