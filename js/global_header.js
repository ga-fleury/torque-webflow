const navMenuButtons = $("#button1,#button2");
let menuOpen = false;

navMenuButtons.on("click", function () {
    if (menuOpen === false) {
        $("body").addClass("overflow-hidden");
        menuOpen = !menuOpen;
    } else {
        $("body").removeClass("overflow-hidden");
        menuOpen = !menuOpen;
    }
});

const navLinks = $(
    "#contact-over, #contact-over2, #about-over, #about-over2, #getstarted"
);

navLinks.on("click", function () {
    $("body").removeClass("overflow-hidden");
    menuOpen = false;
});

/* the viewport is less than 991 pixels wide */

$("#login1").on("click", function () {
    if (!window.matchMedia("(min-width: 991px)").matches) {
        $("#button1").triggerHandler("tap");
        $("body").removeClass("overflow-hidden");
        menuOpen = false;
    }
});

/*  */
$(window).on("resize", function () {
    if (menuOpen) {
        $("#navshadow").addClass("navshadow-display");
        console.log("menu opened");
    } else {
        $("#navshadow").removeClass("navshadow-display");
        console.log("menu closed");
    }
});

$(window).on("orientationchange", function () {
    if (menuOpen) {
        $("#navshadow").css(["display", "block", "opacity", "1"]);
        console.log("menu opened");
    } else {
        $("#navshadow").removeClass("navshadow-display");
        console.log("menu closed");
    }
});

$("#login2").on("click", function () {
    $("#button2").triggerHandler("tap");
    $("body").removeClass("overflow-hidden");
    menuOpen = false;
});

$("#login3").on("click", function () {
    $("#button2").triggerHandler("tap");
    menuOpen = false;
});
