function slick() {
  $('.slick').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });
}

$(document).ready(slick);

var nav1 = $("header .navbar");
$(window).scroll(function() {
  if( $(this).scrollTop() > 250) {
    nav1.addClass("scrolled");
  } else {
    nav1.removeClass("scrolled");
  }
});
