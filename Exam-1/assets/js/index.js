//burger-menu
let burger = document.getElementsByClassName('header__burger-menu')[0];
let header = document.getElementsByClassName('header')[0];
burger.addEventListener("click", function(e) {
    burger.classList.toggle('header__burger-menu_active')
    header.classList.toggle('header_active')
}, false);

//skroll
const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
  anchor.addEventListener("click", function(event){
    event.preventDefault();
    const blockID = anchor.getAttribute('href')
    document.querySelector('' + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  })
}