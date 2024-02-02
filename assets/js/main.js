const swiper = new Swiper(".Iterative-slider", {
  // Optional parameters
  direction: "vertical",
  // loop: true,
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  mousewheel: {
    invert: false,
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

var swiper2 = new Swiper(".futuristic-slider", {
  centeredSlides: false,
  slidesPerView: 1,
  loop: true,
  navigation: false,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  speed: 10000,
  pagination: {
    el: false,
  },
});

$(document).ready(function() {
  $('.accortion-button button').click(function() {
    $(this).next('.acc-content').slideToggle();
    $(this).find('.accordion-icon i').toggleClass('fa-plus fa-minus');
  });
});
