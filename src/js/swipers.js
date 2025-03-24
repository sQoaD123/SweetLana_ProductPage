import Swiper from "swiper/bundle";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/bundle";

let sliders = document.querySelectorAll("._slider");
if (sliders) {
  for (let index = 0; index < sliders.length; index++) {
    let slider = sliders[index];
    if (!slider.classList.contains("swiper-build")) {
      let slider_items = slider.children;
      if (slider_items) {
        for (let index = 0; index < slider_items.length; index++) {
          let el = slider_items[index];
          el.classList.add("swiper-slide");
        }
      }
      let slider_content = slider.innerHTML;
      let slider_wrapper = document.createElement("div");
      slider_wrapper.classList.add("swiper-wrapper");
      slider_wrapper.innerHTML = slider_content;
      slider.innerHTML = "";
      slider.appendChild(slider_wrapper);
      slider.classList.add("swiper-bild");
    }
    if (slider.classList.contains("._gallery")) {
    }
  }
  slider_bild_callback();
}

function slider_bild_callback(params) {}

// let main_slider = new Swiper(".comments-slider__body", {
//   observer: true,
//   observeParents: true,
//   slidesPerView: 4,
//   spaceBetween: 20,
//   autoHeight: false,
//   speed: 800,
//   loop: true,
//   modules: [Navigation, Pagination],
//   navigation: {
//     nextEl: ".comments-slider__button_next",
//     prevEl: ".comments-slider__button_prev",
//   },
//   pagination: {
//     el: ".comments-slider__dots",
//     clickable: true,
//   },
//   //   breakpoints: {
//   //     320: {
//   //       autoHeight: true,
//   //     },
//   //     768: {
//   //       autoHeight: false,
//   //     },
//   //   },
//   on: {
//     lazyImageReady: function () {
//       ibg();
//     },
//   },
// });

let main_slider;
function initMainSwiper() {
  if (window.innerWidth > 992) {
    if (!main_slider) {
      main_slider = new Swiper(".comments-slider__body", {
        observer: true,
        observeParents: true,
        slidesPerView: 4,
        spaceBetween: 20,
        autoHeight: false,
        speed: 800,
        loop: true,
        modules: [Navigation, Pagination],
        navigation: {
          nextEl: ".comments-slider__button_next",
          prevEl: ".comments-slider__button_prev",
        },
        pagination: {
          el: ".comments-slider__dots",
          clickable: true,
        },
      });
    }
  } else {
    if (main_slider) {
      main_slider.destroy(true, true);
      main_slider = null;
    }
  }
}

initMainSwiper();
window.addEventListener("resize", initMainSwiper);
