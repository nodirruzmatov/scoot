

const elHamburgerBtn = document.querySelector(".header__hamburger");
const elHamburgerBtnClose = document.querySelector(".header__bg");

const elHeader = document.querySelector(".header");

elHamburgerBtn.addEventListener("click", function(){
  elHeader.classList.toggle("header--open")
})

elHamburgerBtnClose.addEventListener("click", function(){
  elHeader.classList.remove("header--open")
})