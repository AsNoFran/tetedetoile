(function ($) {
  "use strict";

  // === Back to Top Button
  var back_top_btn = $("#back-to-top");

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      back_top_btn.addClass("show");
    } else {
      back_top_btn.removeClass("show");
    }
  });

  back_top_btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
  });

  /*--------- WOW js-----------*/
  function bodyScrollAnimation() {
    var scrollAnimate = $("body").data("scroll-animation");
    if (scrollAnimate === true) {
      new WOW({
        mobile: false,
      }).init();
    }
  }
  bodyScrollAnimation();

  /*--------------- Slick Slider js--------*/
  if ($(".steps-slider").length) {
    $(".steps-slider").slick({
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 12000,
      speed: 1000,
      dots: false,
      arrows: true,
      infinite: true,
      prevArrow:
        '<button type="button" class="slick-prev"><i class="arrow_carrot-left "></i></button>',
      nextArrow:
        '<button type="button" class="slick-next"><i class="arrow_carrot-right"></i></button>',
    });
  }
})(jQuery);
