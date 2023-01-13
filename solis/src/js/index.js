//Switch
let checkbox = $("#dark-theme");
checkbox.change(function () {
if(checkbox.is(':checked')){
$('.wrapper').addClass('dark-theme')
} else {
$('.wrapper').removeClass('dark-theme')
}
}); 

//burger-menu
let burger = document.getElementsByClassName('header__burger-menu')[0];
let header = document.getElementsByClassName('header')[0];
burger.addEventListener("click", function(e) {
    burger.classList.toggle('header__burger-menu_active')
    header.classList.toggle('header_active')
}, false);

//close burger-menu at click
$('.menu__item').click (function () {
  $('header__burger-menu').toggleClass('header__burger-menu_active');
  $('header').toggleClass('header_active');
});

//video-play
$(function () {
    var $videoPlayer = $('.player'),
    $playerControls = $ ('.player-control'),
    $video = $('.video')[0];

    $playerControls.click(function (){
      if ($video.paused) {
        $video.play();
        $videoPlayer.addClass('player-playing');
      } else {
        $video.pause();
        $videoPlayer.removeClass('player-playing');
      }
    });
});

//form validation
const form = document.querySelector('.form');
const userName = document.querySelector('#name');
const email = document.querySelector('#email');
const moreText = document.querySelector('#tellmore');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  formValidation();
});

function formValidation() {
  if(!userName.value) {
    userName.style.borderBottom = "2px solid red"
  } else {
    userName.style.borderBottom = "2px solid rgb(21, 217, 70)"
  }

  if(!email.value) {
    email.style.borderBottom = "2px solid red"
  } else if(!isEmail (email.value)) {
    email.style.borderBottom = "2px solid red"
  } else {
    email.style.borderBottom = "2px solid rgb(21, 217, 70)"
  }

  if(!moreText.value) {
    moreText.style.borderBottom = "2px solid red"
  } else {
    moreText.style.borderBottom = "2px solid rgb(21, 217, 70)"
  }
}
function isEmail(email) {
  return email.match(
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
}

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