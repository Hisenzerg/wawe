$(function(){

  var elem = $('header >.header__top');
  var doc = $(document);
  function scrolled() {
    var threshold = doc.scrollTop() > 350;
    elem.toggleClass('scrolled', threshold);
  }
  $(window).on({ scroll: scrolled });

  $(".menu a, .logo, .footer__logo").on("click", function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });

  $('[data-fancybox="images"]').fancybox({
    afterLoad: function (instance, current) {
      var pixelRatio = window.devicePixelRatio || 1;

      if (pixelRatio > 2) {
        current.width = current.width / pixelRatio;
        current.height = current.height / pixelRatio;
      }
    }
  });

  $('.slider').slick({
    dots: true,
    fade: true,
    arrows: false,
    autoplay: false,
  });


  $('.menu__btn, .menu a').click(function () {
    $('.header__inner').toggleClass('header__inner--active');
    $('.menu__btn').toggleClass('menu__btn--active');
    
  });




  var mixer = mixitup('.gallery__content');

});
