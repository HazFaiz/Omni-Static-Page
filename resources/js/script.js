$(document).ready(function () {
  // For sticky navi
  $(".js--section-features").waypoint(
    function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "25%",
    }
  );

  // For scroll on button click
  $(".js--scroll-to-plan").click(function () {
    $("html, body").animate(
      {
        scrollTop: $(".js--section-plans").offset().top,
      },
      1000
    );
  });

  $(".js--scroll-to-start").click(function () {
    $("html, body").animate(
      {
        scrollTop: $(".js--section-features").offset().top,
      },
      1000
    );
  });

  $(".js--scroll-to-splash").click(function () {
    $("html, body").animate(
      {
        scrollTop: $(".main").offset().top,
      },
      1000
    );
  });

  // Navigation scroll
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top,
            },
            1000,
            function () {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });

  // Animations on scroll
  $(".js--wp-1").waypoint(
    function (direction) {
      $(".js--wp-1").addClass("animate__animated animate__fadeIn");
    },
    { offset: "60%" }
  );

  $(".js--wp-2").waypoint(
    function (direction) {
      $(".js--wp-2").addClass("animate__animated animate__fadeInUp");
    },
    { offset: "60%" }
  );
  $(".js--wp-3").waypoint(
    function (direction) {
      $(".js--wp-3").addClass("animate__animated animate__fadeIn");
    },
    { offset: "60%" }
  );
  $(".js--wp-4").waypoint(
    function (direction) {
      $(".js--wp-4").addClass("animate__animated animate__pulse");
    },
    { offset: "60%" }
  );

  // Mobile navigation

  $(".js--nav-icon").click(function () {
    var nav = $(".js--main-nav");
    var icon = $("js--nav-icon ion-icon");
    var selector = document.getElementById("icon-test");
    nav.slideToggle(200);

    if (selector.getAttribute("name") === "menu-outline") {
      selector.setAttribute("name", "close-outline");
    } else {
      selector.setAttribute("name", "menu-outline");
    }

    // if (icon.hasClass(".menu-outline")) {
    //   icon.addClass("close-outline");
    //   icon.removeClass(".menu-outline");
    // } else {
    //   icon.addClass(".menu-outline");
    //   icon.removeClass("close-outline");
    // } //Dont know how to target "name" attribute with jquery, used js instead
  });
});
