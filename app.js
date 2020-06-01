var mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "horizontal",
  speed: 1000,
  parallax: true,
  loop: false,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  //PARA PROBAR -> effect: "fade",

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

var swiper = new Swiper(".swiper-contenedor", {
  spaceBetween: 0,
  speed: 1500,
  centeredSlides: true,
  parallax: true,
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-puntitos",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
