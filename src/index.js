import "./index.html";
import "./index.scss";
import "./js/swipers";

let iconMenu = document.querySelector(".icon-menu__body");
iconMenu.addEventListener("click", function (e) {
  // let menuBg = document.querySelector(".header__wrapper");
  let menu = document.querySelector(".icon-menu__menu");
  // let phone = document.querySelector(".info-header__item_phone");
  // let button = document.querySelector(".info-header__item_button");
  let body = document.querySelector("body");
  // menuBg.classList.toggle("_burger-active");
  menu.classList.toggle("_active");
  // phone.classList.toggle("_burger-active");
  // button.classList.toggle("_burger-active");
  body.classList.toggle("_lock");
  iconMenu.classList.toggle("_active");
  e.preventDefault();
});

const sweetsMenu = document.querySelector(".sweets");
sweetsMenu.addEventListener("click", function (e) {
  let sweetsMenuBody = document.querySelector(".sweets__menu-body");
  let sweetsArrow = document.querySelector(".sweets__arrow");
  sweetsMenuBody.classList.toggle("_active");
  sweetsArrow.classList.toggle("_active");
  sweetsMenu.classList.toggle("_no-hover");
});

document.addEventListener("click", function (e) {
  let sweetsMenuBody = document.querySelector(".sweets__menu-body");
  let sweetsArrow = document.querySelector(".sweets__arrow");
  if (
    sweetsMenuBody.classList.contains("_active") &&
    !sweetsMenu.contains(e.target)
  ) {
    sweetsMenuBody.classList.remove("_active");
    sweetsArrow.classList.remove("_active");
    sweetsMenu.classList.remove("_no-hover");
  }
});

function updateMenuHeight() {
  const menuList = document.querySelector(".menu__list");
  const phoneItem = document.querySelector(".info-header__item_phone");
  if (window.innerWidth < 992) {
    const menuHeight = menuList.offsetHeight;
    let offset = 60;
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

document.addEventListener("DOMContentLoaded", () => {
  const sections = [
    {
      section: document.querySelector(".custom"),
      menuItem: document.querySelector(".menu__item_custom"),
    },
    {
      section: document.querySelector(".comments-slider"),
      menuItem: document.querySelector(".menu__item_comments"),
    },
    {
      section: document.querySelector(".reasons"),
      menuItem: document.querySelector(".menu__item_reasons"),
    },
    {
      section: document.querySelector(".form"),
      menuItem: document.querySelector(".menu__item_form"),
    },
  ];

  function checkScroll() {
    sections.forEach(({ section, menuItem }) => {
      if (!section || !menuItem) return;

      const rect = section.getBoundingClientRect();

      if (rect.top <= 0 && rect.bottom > 0) {
        menuItem.classList.add("_active");
      } else {
        menuItem.classList.remove("_active");
      }
    });
  }

  window.addEventListener("scroll", checkScroll);
});

//
const goLinks = document.querySelectorAll(".go_link[data-goto]");
if (goLinks.length > 0) {
  goLinks.forEach((goLink) => {
    goLink.addEventListener("click", onGoLinkClick);
  });

  function onGoLinkClick(e) {
    const goLink = e.target;
    if (goLink.dataset.goto && document.querySelector(goLink.dataset.goto)) {
      const gotoBlock = document.querySelector(goLink.dataset.goto);
      const gotoBlockValue =
        gotoBlock.getBoundingClientRect().top + pageYOffset + 1;

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth",
      });
      e.preventDefault();
    }
  }
}

//
document.addEventListener("DOMContentLoaded", function () {
  function onEntry(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("_show");
        observer.unobserve(entry.target);
      }
    });
  }

  let options = {
    threshold: 0.1,
  };

  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll(".show-anim");

  elements.forEach((el) => observer.observe(el));
});

function updateMenuPosition() {
  const sweetsElement = document.querySelector(".sweets");
  const menuBodyElement = document.querySelector(".sweets__menu-body");

  if (sweetsElement && menuBodyElement) {
    const rect = sweetsElement.getBoundingClientRect();
    const leftOffset = rect.left + window.scrollX - 10;

    menuBodyElement.style.left = `${leftOffset}px`;
  }
}

window.addEventListener("load", updateMenuPosition);
window.addEventListener("resize", updateMenuPosition);
