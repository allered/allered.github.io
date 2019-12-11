var hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
      hamburgers.forEach(function (hamburger) {
        hamburger.addEventListener("click", function () {
          this.classList.toggle("is-active");
        }, false);
      });
    }

    var togglers = document.querySelectorAll('[data-toggle="navbar"]');
    if (togglers.length > 0) {
      togglers.forEach(function (toggle) {
        toggle.addEventListener("click", function () {
          var target = this.getAttribute('href');
          document.querySelector(target).classList.toggle("ar-navbar--active");
        }, false);
      });
    }