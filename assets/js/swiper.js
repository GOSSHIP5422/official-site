/* ==============================
    Swiper
  ============================== */
let swipeOption = {
  loop: true,
  effect: 'fade',
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 3000,
}
new Swiper('.swiper-container', swipeOption);
