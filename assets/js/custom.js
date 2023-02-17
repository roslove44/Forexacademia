$(window).scroll(function () {
  if ($(window).scrollTop() >= 300) {
    $(".header-nav-area").addClass("fixed-header");
  } else {
    $(".header-nav-area").removeClass("fixed-header");
  }
});
$(document).ready(function () {
  $(".header-responsive-menu").click(function () {
    $(".header-nav-menu-area").slideToggle("slow");
  });
  $(".grid").isotope({
    itemSelector: ".grid-item",
  });
  // filter items on button click
  $(".filter-button-group").on("click", "li", function () {
    var filterValue = $(this).attr("data-filter");
    $(".grid").isotope({
      filter: filterValue,
    });
    $(".filter-button-group li").removeClass("active");
    $(this).addClass("active");
  });
  $('[data-fancybox="gallery"]').fancybox({
    // Options will go here
  });
  $(".teacher-slider").owlCarousel({
    autoplay: true,
    lazyLoad: true,
    loop: true,
    margin: 20,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },

      600: {
        items: 3,
      },

      1024: {
        items: 4,
      },

      1366: {
        items: 4,
      },
    },
  });
  $(".our-client-slider").owlCarousel({
    autoplay: true,
    lazyLoad: true,
    loop: true,
    margin: 20,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: true,
    responsive: {
      0: {
        items: 2,
      },

      600: {
        items: 4,
      },

      1024: {
        items: 4,
      },

      1366: {
        items: 5,
      },
    },
  });
  $(".faq-box-list > a").on("click", function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).siblings(".content").slideUp(200);
    } else {
      $(".faq-box-list > a").removeClass("active");
      $(this).addClass("active");
      $(".content").slideUp(200);
      $(this).siblings(".content").slideDown(200);
    }
  });
  new WOW().init();
});
// window.onload = function () {
//   document.addEventListener(
//     "contextmenu",
//     function (e) {
//       e.preventDefault();
//     },
//     false
//   );
//   document.addEventListener(
//     "keydown",
//     function (e) {
//       //document.onkeydown = function(e) {
//       // "I" key
//       if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
//         disabledEvent(e);
//       }
//       // "J" key
//       if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
//         disabledEvent(e);
//       }
//       // "S" key + macOS
//       if (
//         e.keyCode == 83 &&
//         (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)
//       ) {
//         disabledEvent(e);
//       }
//       // "U" key
//       if (e.ctrlKey && e.keyCode == 85) {
//         disabledEvent(e);
//       }
//       // "F12" key
//       if (event.keyCode == 123) {
//         disabledEvent(e);
//       }
//     },
//     false
//   );
//   function disabledEvent(e) {
//     if (e.stopPropagation) {
//       e.stopPropagation();
//     } else if (window.event) {
//       window.event.cancelBubble = true;
//     }
//     e.preventDefault();
//     return false;
//   }
// };
