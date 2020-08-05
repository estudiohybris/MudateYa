console.log('Test');

// --------------------
// CSS
// --------------------
import 'scss/main.scss';


// --------------------
// Libraries
// --------------------
import 'popper.js';
import 'bootstrap';


// --------------------
// Functions
// --------------------
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
        $(".navbar.navbar-expand-lg.navbar-light.sticky-top.bg-white").addClass("shadow");
    }
    else {
        $(".navbar.navbar-expand-lg.navbar-light.sticky-top.bg-white").removeClass("shadow");
    }
});