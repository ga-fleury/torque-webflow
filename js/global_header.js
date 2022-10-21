$('#navshadow').on("click", function () {
    if (menuOpen) {
        $("#button1").triggerHandler("tap");
     
        $("body").removeClass("overflow-hidden");
        menuOpen = false;
    }
});

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


/* This  function makes overflow-hidden happen whenever you click in any place of the page but a specific ID */
$('body').click(function(evt){    
    if(evt.target.id == "button1, button2")
       return;
    //For descendants of menu_content being clicked, remove this check if you do not want to put constraint on descendants.
    if($(evt.target).closest('#button1, #button2').length)
       return;             

       if (menuOpen) {     
        $("body").removeClass("overflow-hidden");
        menuOpen = false;
    }
   //Do processing of click event here for every element except with id menu_content
});


/* closes tap 1 nav-fixed inside 991px viewport */
$("#login1").on("click", function () {
    if (!window.matchMedia("(min-width: 991px)").matches) {
        $("#button1").triggerHandler("tap");
        $("body").removeClass("overflow-hidden");
        menuOpen = false;
    } 
});

/* closes tap 2 nav-home inside 991px viewport */
$("#login2").on("click", function () {
    if (!window.matchMedia("(min-width: 991px)").matches) {
        $("#button2").triggerHandler("tap");
        $("body").removeClass("overflow-hidden");
        menuOpen = false;
    }
});

/*  */
$(window).on("resize", function () {
    if (menuOpen) {
        $("#navshadow").addClass("navshadow-display");
    } else {
        $("#navshadow").removeClass("navshadow-display");
    }
});

$(window).on("orientationchange", function () {
    if (menuOpen) {
        $("#navshadow").addClass("navshadow-display");
    } else {
        $("#navshadow").removeClass("navshadow-display");
    }
});


$("#login3").on("click", function () {
    $("#button2").triggerHandler("tap");
    menuOpen = false;
});

/* This prevents page transition bug */
window.addEventListener( "pageshow", function ( event ) {
    var historyTraversal = event.persisted || 
                           ( typeof window.performance != "undefined" && 
                                window.performance.navigation.type === 2 );
    if ( historyTraversal ) {
      // Handle page restore.
      window.location.reload();
    }
  });

console.log('global header loaded')
