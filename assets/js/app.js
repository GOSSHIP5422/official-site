$(function () {
  /* ==============================
    Drawer
  ============================== */
  $('#js-drawer').click(function () {
    var ww = window.innerWidth;
    if (ww < 480) {
      $('body').toggleClass('is-drawerActive');
      $('.p-gnav--menu').fadeToggle();
      if ($(this).attr('aria-expanded') == 'false') {
        $(this).attr('aria-expanded', true);
      } else {
        $(this).attr('aria-expanded', false);
      }
    }
  });

  /* ==============================
    Header SP ロゴがスクロールで消える
  ============================== */
  var scrollEnd = $('.js-endBox').offset().top;
  var distance = 0;
  $(document).scroll(function () {
    var ww = window.innerWidth;
    if (ww < 480) {
      distance = $(this).scrollTop();
      if (scrollEnd <= distance) {
        $('.p-header--title').addClass('none');
        $('.p-hamburger').addClass('bg')
      } else {
        $('.p-header--title').removeClass('none');
        $('.p-hamburger').removeClass('bg')
      }
    }
  });

  /* ==============================
    Header tab/PC ヘッダー背景がスクロールで表示
  ============================== */
  var header = $('.js-header');
  $(document).scroll(function () {
    var ww = window.innerWidth;
    if (480 <= ww) {
      var imgHeight = $('.js-mainvidual').outerHeight();
      if ($(window).scrollTop() < imgHeight) {
        header.removeClass('js-header-color');
      } else {
        header.addClass('js-header-color');
      }
    }
  });
});

/* ==============================
    Live archive タブ切り替え
  ============================== */
$('.js-tab-content>div').hide();
$('.js-tab-content>div').first().slideDown();
$('.js-tab-buttons label').click(function () {
  var thisclass = $(this).attr('class');
  $('#lamp').removeClass().addClass('#lamp').addClass(thisclass);
  $('.js-tab-content>div').each(function () {
    if ($(this).hasClass(thisclass)) {
      $(this).fadeIn(1000);
    }
    else {
      $(this).hide();
    }
  });
});


/* ==============================
    SVG animation
  ============================== */
const anime = () => {
  new Vivus('svg-animation', { start: "autostart", type: 'delayed', duration: 200, forceRender: false, animTimingFunction: Vivus.EASE }, (obj) => {
    obj.el.classList.add('draw');
  });
}
anime();
