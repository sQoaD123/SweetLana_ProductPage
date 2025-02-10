import "./index.html";
import "./index.scss";

let iconMenu = document.querySelector(".icon-menu__body");
iconMenu.addEventListener("click", function (e) {
  let menuBg = document.querySelector(".header__wrapper");
  let menu = document.querySelector(".header__menu");
  let phone = document.querySelector(".info-header__item_phone");
  let button = document.querySelector(".info-header__item_button");
  let body = document.querySelector("body");
  menuBg.classList.toggle("_burger-active");
  menu.classList.toggle("_burger-active");
  phone.classList.toggle("_burger-active");
  button.classList.toggle("_burger-active");
  body.classList.toggle("_lock");
  iconMenu.classList.toggle("_active");
  e.preventDefault();
});

function updateMenuHeight() {
  const menuList = document.querySelector(".menu__list");
  const phoneItem = document.querySelector(".info-header__item_phone");
  if (window.innerWidth < 992) {
    const menuHeight = menuList.offsetHeight;
    let offset = 66;
    if (window.innerWidth < 767) {
      offset = 50;
    }
    phoneItem.style.top = `${menuHeight + offset}px`;
  } else {
    menuList.style.height = "100%";
    phoneItem.style.top = "auto";
  }
}

window.addEventListener("load", updateMenuHeight);
window.addEventListener("resize", updateMenuHeight);

document.addEventListener("DOMContentLoaded", function () {
  const headerElement = document.querySelector(".header");

  function handleScroll() {
    if (window.scrollY > 50) {
      headerElement.classList.add("_scroll");
    } else {
      headerElement.classList.remove("_scroll");
    }
  }

  handleScroll();
  window.addEventListener("scroll", handleScroll);
});
