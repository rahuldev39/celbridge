$(function() {
  "use strict";
  var t;

  function e(t) {
    t.next().hasClass("show") || t.parents(".dropdown-menu").first().find(".show").removeClass("show");
    var e = t.next(".dropdown-menu");
    e.toggleClass("show"), e.parent().toggleClass("show")
  }
  $('[data-toggle="offcanvas"]').on("click", function() {
    $(".offcanvas-collapse").toggleClass("open")
  }), $('.nav--has-sub-menu [data-toggle="dropdown"]').on("click", function() {
    return e($(this)), !1
  }), $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(t) {
    if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") && location.hostname === this.hostname) {
      var e = $(this.hash);
      (e = e.length ? e : $("[name=" + this.hash.slice(1) + "]")).length && (t.preventDefault(), $("html, body").animate({
        scrollTop: e.offset().top
      }, 1e3, function() {
        var t = $(e);
        if (t.focus(), t.is(":focus")) return !1;
        t.attr("tabindex", "-1"), t.focus()
      }))
    }
  });


});


//Spiner
$(window).on('load', function() {
  $('.lds-roller').fadeOut();
  $('.preload').delay(350).fadeOut('slow');
});
