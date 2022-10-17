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

const navLinks = $("#contact-over, #contact-over2,  #about-over, #about-over2");

navLinks.on("click", function () {
    $("body").removeClass("overflow-hidden");
    menuOpen = false;
});

$("#login1").on("click", function () {
    $('#button1').triggerHandler('tap');
    menuOpen = false;
});

$("#login2").on("click", function () {
    $('#button2').triggerHandler('tap');
    menuOpen = false;
});
$("#login3").on("click", function () {
    $('#button2').triggerHandler('tap');
    menuOpen = false;
});
