document.addEventListener("DOMContentLoaded", function () {
  //CONFIGURACION SWIPER HEADER
  var mySwiper = new Swiper(".swiper-container", {
    // PARAMETROS OPCIONALES
    direction: "horizontal",
    speed: 3000,
    parallax: true,
    loop: false,
    //PARA PROBAR -> effect: "fade",
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    // PAGINACION(PUNTITOS)
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // FLECHAS DE NAVEGACION
    /*navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },*/

    // SCROLLBAR
    /*scrollbar: {
      el: ".swiper-scrollbar",
    },*/
  });

  //CONFIGURACION SWIPER TESTIMONIOS
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

  //API INTERSECTION OBSERVER PARA LOS EFECTOS DE LOS SPAN Y LAZY LOADING

  const delayDos = document.getElementsByClassName("delay-2");

  const delayTres = document.getElementsByClassName("delay-3");

  const delayUno = document.getElementsByClassName("delay-1");

  const disparador = document.querySelector("body");

  disparador.addEventListener("click", function mover() {
    for (var x = 0; x < delayUno.length; x++) {
      delayUno[x].style.left = "600px";
    }
    for (var x = 0; x < delayDos.length; x++) {
      delayDos[x].style.left = "600px";
    }
    for (var x = 0; x < delayTres.length; x++) {
      delayTres[x].style.left = "600px";
    }
  });
});
