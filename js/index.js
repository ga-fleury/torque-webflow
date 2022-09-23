
$('#btn-start-now').css('background-color', 'red');

/**
 * Removes all sucesses and fails from the different form snippets
 */
$(".w-form-fail").each(function () {
    $(this).detach();
});

$(".w-form-done").each(function () {
    $(this).detach();
});

$("input[type=radio]").each(function () {
    $(this).after(
        "<div class='radio-outer'> <div class='radio-inner'> </div></div>"
    );
    $(this).css("display", "none");
});

/**
 * Sets the correct values for the checkboxes since Webflow won't let you do this
 */
 $("#check11").attr("value", "Preventive Maintenance");
 $("#check12").attr("value", "Follow Up Repair");
 $("#check13").attr("value", "Other");
 $("#check21").attr("value", "Trucks");
 $("#check22").attr("value", "Tractors");
 $("#check23").attr("value", "Trailers");
 $("#check24").attr("value", "Others");
 

/**
 * Radio Button hover effects
 */

function radioIn() {
    if (!$(this).find(".w-radio-input").is(":checked")) {
        $(this).find(".radio-inner").addClass("hover");
    }
    $(this).css("border", "2px solid #f47633");
}

function radioOut() {
    if (!$(this).find(".w-radio-input").is(":checked")) {
        $(this).css("border", "2px solid transparent");
    }
    $(this).find(".radio-inner").removeClass("hover");
}

function checkboxIn() {
    $(this).css("border", "2px solid #f47633");
}

function checkboxOut() {
    if (!$(this).find(".w-checkbox-input").hasClass("w--redirected-checked")) {
        $(this).css("border", "2px solid transparent");
    }
}

/**
 * Checkboxes Checked effect
 */

$(".w-checkbox").each(function (index) {
    $(this).on("click", function () {
        if (
            $(this).find(".w-checkbox-input").hasClass("w--redirected-checked")
        ) {
            $(this).css("background-color", "white");
            $(this).css("border", "2px solid rgba(0,0,0,0)");
            $(this).find(".checkbox-label").css("color", "#6b7280");
            $(this).find(".svg-icon-form").css("color", "#6b7280");
        } else {
            $(this).css("background-color", "#ffe1d2");
            $(this).css("border", "2px solid rgb(255, 106, 19");
            $(this).find(".checkbox-label").css("color", "rgb(255, 106, 19");
            $(this).find(".svg-icon-form").css("color", "rgb(255, 106, 19");
        }
    });

    $(this).hover(checkboxIn, checkboxOut);
});

/**
 * A enum-like structure to make it easier to reference the indexes of the different
 * steps on the Registration Form slider/carousel.
 */
const REGISTRATION_FORM_STEPS = {
    EARLY_ACCESS_STEP: 0,
    SERVICE_TYPE_STEP: 1,
    LOCATIONS_STEP: 2,
    ZIP_CODE_STEP: 3,
    FLEET_MAKEUP_STEP: 4,
    FLEET_SIZE_STEP: 5,
    HOW_OFTEN_STEP: 6,
    BUSINESS_TYPE_STEP: 7,
    ROLE_STEP: 8,
    COMPANY_INFORMATION_STEP: 9,
    PHONE_NUMBER_STEP: 10,
    THANK_YOU_STEP: 11,
};

// ----------------------- Some shared DOM elements --------------------------------

/**
 * The selector for the main container of the Registration Form.
 */
const registrationFormContainerSelector = "#reg-form-container";

/**
 * Reference to the main container (DOM element) of the whole Registration Form.
 * This container is the DOM parent of all the registration steps/screens in the slider/carousel.
 */
const registrationFormContainer = $(registrationFormContainerSelector);

// =============================== STEPS START =====================================

// ------------------------ STEP 1 (Early Access) -----------------------------

/**
 * A reference to the DOM container of the elements on the first step.
 */
const earlyAccessStep = $("#early-access-step", registrationFormContainer);

/**
 * Reference to the HTML form element that contains the field inputs for the first
 * step on the Registration form (Company Profile).
 */
const registrationForm = $("#registration-data-form");

/**
 * Gets a reference to the "I don't have a DOT" checkbox field.
 */
const getIdontHaveDotField = () => getFormField("#doNotHaveDot");

/**
 * Gets a reference to the DOT field.
 */
const getDotField = () => getFormField("#dot");

/**
 * Gets the current registration type linked to this registration form.
 */
const getRegistrationType = () => {
    const registrationTypeElement = $("#registration-type");
    const registrationTypeValue = registrationTypeElement
        .text()
        .toLocaleLowerCase()
        .trim();
    return REGISTRATION_TYPE[registrationTypeValue];
};

// ------------------------ STEP - SERVICE TYPE -----------------------------

/**
 * A reference to the DOM container of the elements on the step for service selection.
 * Disables the Next button
 */
const serviceTypeStep = $("#service-type-step", registrationFormContainer);
serviceTypeStep.find("#btn-service-type-next").prop("disabled", true);
serviceTypeStep.find("#btn-service-type-next").addClass("disabled");

/**
 * Selects the checkboxes (<div> tag) as well as the checks (<input> tag) for that particular step
 */

const checkboxesServiceType = $("#checkbox11,#checkbox12,#checkbox13");
const checksServiceType = $("#check11,#check12,#check13");

checkboxesServiceType.on("click", function () {
    let checks = 0;
    $(checksServiceType).each(function () {
        if (this.checked) {
            checks++;
        }
    });
    if (checks > 0) {
        $("#btn-service-type-next").removeClass("disabled");
        $("#btn-service-type-next").attr("onclick", "goToLocationsStep();");
    } else if (checks == 0) {
        $("#btn-service-type-next").addClass("disabled");
        $("#btn-service-type-next").prop("disabled", true);
        $("#btn-service-type-next").attr("onclick", "return false;");
    }
});

/**
 * Form nav buttons
 */
$("#btn-service-type-back", registrationFormContainer).on("click", function () {
    goToEarlyAccessStep();
});

$("#btn-service-type-next", registrationFormContainer).on("click", function () {
    if ($(this).has("disabled")) {
        return false;
    } else {
        goToLocationsStep();
        return false;
    }
});

// ------------------------ STEP - LOCATIONS -----------------------------

/**
 * A reference to the DOM container of the elements on the "locations" step.
 */
const locationsStep = $("#locations-step", registrationFormContainer);
locationsStep.find("#btn-location-next").prop("disabled", true);
locationsStep.find("#btn-location-next").addClass("disabled");

$("#radio-1,#radio-2").on("click", function () {
    if ($(this).find(".w-checkbox-input").is(":checked")) {
        $("#btn-location-next").addClass("disabled");
        $("#btn-location-next").prop("disabled", true);
        $("#btn-location-next").attr("onclick", "return false;");
        $(this).next(".radio-outer").removeClass("active");
    } else {
        $("#btn-location-next").removeClass("disabled");
        $("#btn-location-next").attr("onclick", "goToZipCodeStep();");
        $(this).parent().css("background-color", "rgb(255 225 210)");
        $(this).parent().css("border", "2px solid #f47633");
        $(this).parent().find(".radio-button-label").css("color", "#f47633");
        $(this).next(".radio-outer").addClass("active");
    }

    $("#radio-1,#radio-2").each(function () {
        if (!$(this).is(":checked")) {
            $(this).next(".radio-outer").removeClass("active");
            $(this).parent().css("background-color", "white");
            $(this).parent().css("border", "2px solid transparent");
            $(this)
                .parent()
                .find(".radio-button-label")
                .css("color", "rgb(107 114 128)");
        }
    });
});

$("#radio-1,#radio-2").parent().hover(radioIn, radioOut);

/**
 * Form nav buttons
 */
$("#btn-location-back", registrationFormContainer).on("click", function () {
    goToServiceTypeStep();
});

$("#btn-location-next", registrationFormContainer).on("click", function () {
    if ($(this).has("disabled")) {
        return false;
    } else {
        goToZipCodeStep();
        return false;
    }
});

// ------------------------ STEP - ZIP CODE -----------------------------

/**
 * A reference to the DOM container of the elements on the "Zip Code" step.
 */
const zipCodeStep = $("#zip-code-step", registrationFormContainer);
zipCodeStep.find("#btn-zip-code-next").prop("disabled", true);
zipCodeStep.find("#btn-zip-code-next").addClass("disabled");
let zipErrorMessageDisplayed = false;

$("#zip-code-field").keyup(function () {
    validateZipCode();
});

$("#zip-code-field").submit(function () {
    return false;
});

function validateZipCode() {
    const isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
    const inputValue = $("#zip-code-field").val();

    if (inputValue.match(isValidZip)) {
        zipCodeValidStyling();
    } else {
        zipCodeInvalidStyling();
    }
}

function zipCodeValidStyling() {
    $("#btn-zip-code-next").removeClass("disabled");
    $("#btn-zip-code-next").attr("onclick", "goToFleetMakeupStep();");
    $("#zip-code-field").css("border", "2px solid rgb(0 51 160)");
    if (zipErrorMessageDisplayed == true) {
        $("#error-zip").detach();
        zipErrorMessageDisplayed = false;
    }
}

function zipCodeInvalidStyling() {
    $("#btn-zip-code-next").addClass("disabled");
    $("#btn-zip-code-next").prop("disabled", true);
    $("#btn-zip-code-next").attr("onclick", "return false;");
    $("#zip-code-field").css("border", "2px solid red");
    if (zipErrorMessageDisplayed == false) {
        $("#zip-code-wrap").append(
            "<p id='error-zip' style='color:red;'>Please enter a valid value.</p>"
        );
        zipErrorMessageDisplayed = true;
    }
}

/**
 * Form nav buttons
 */
$("#btn-zip-code-back", registrationFormContainer).on("click", function () {
    goToLocationsStep();
    return false;
});

$("#btn-zip-code-next", registrationFormContainer).on("click", function () {
    if ($(this).has("disabled")) {
        return false;
    } else {
        goToFleetMakeupStep();
        return false;
    }
});

// ------------------------ STEP - FLEET MAKEUP -----------------------------

/**
 * A reference to the DOM container of the elements on the "fleet makeup" step.
 */
const fleetMakeupStep = $("#fleet-makeup-step", registrationFormContainer);
fleetMakeupStep.find("#btn-fleet-makeup-next").prop("disabled", true);
fleetMakeupStep.find("#btn-fleet-makeup-next").addClass("disabled");

const checkboxesFleetMakeup = $(
    "#checkbox21,#checkbox22,#checkbox23,#checkbox24"
);
const checksFleetMakeup = $("#check21,#check22,#check23,#check24");

checkboxesFleetMakeup.on("click", function () {
    let checks = 0;
    $(checksFleetMakeup).each(function (i, obj) {
        if (this.checked) {
            checks++;
        }
    });
    if (checks > 0) {
        $("#btn-fleet-makeup-next").removeClass("disabled");
        $("#btn-fleet-makeup-next").attr("onclick", "goToFleetSizeStep();");
    } else if (checks == 0) {
        $("#btn-fleet-makeup-next").addClass("disabled");
        $("#btn-fleet-makeup-next").prop("disabled", true);
        $("#btn-fleet-makeup-next").attr("onclick", "return false;");
    }
});

/**
 * Form nav buttons
 */
$("#btn-fleet-makeup-back", registrationFormContainer).on("click", function () {
    goToZipCodeStep();
    return false;
});

$("#btn-fleet-makeup-next", registrationFormContainer).on("click", function () {
    if ($(this).has("disabled")) {
        return false;
    } else {
        goToFleetSizeStep();
        return false;
    }
});

// ------------------------ STEP - FLEET SIZE -----------------------------

/**
 * A reference to the DOM container of the elements on the "fleet size" step.
 */
const fleetSizeStep = $("#fleet-size-step", registrationFormContainer);
fleetSizeStep.find("#btn-fleet-size-next").prop("disabled", true);
fleetSizeStep.find("#btn-fleet-size-next").addClass("disabled");

$("#radio-3,#radio-4,#radio-5,#radio-6").parent().hover(radioIn, radioOut);

$("#radio-3,#radio-4,#radio-5,#radio-6").on("click", function () {
    if ($(this).find(".w-checkbox-input").is(":checked")) {
        $("#btn-fleet-size-next").addClass("disabled");
        $("#btn-fleet-size-next").prop("disabled", true);
        $("#btn-fleet-size-next").attr("onclick", "return false;");
        $(this).next(".radio-outer").removeClass("active");
    } else {
        $("#btn-fleet-size-next").removeClass("disabled");
        $("#btn-fleet-size-next").attr("onclick", "goToHowOftenStep();");
        $(this).parent().css("background-color", "rgb(255 225 210)");
        $(this).parent().css("border", "2px solid #f47633");
        $(this).parent().find(".radio-button-label").css("color", "#f47633");
        $(this).next(".radio-outer").addClass("active");
    }

    $("#radio-3,#radio-4,#radio-5,#radio-6").each(function () {
        if (!$(this).is(":checked")) {
            $(this).next(".radio-outer").removeClass("active");
            $(this).parent().css("background-color", "white");
            $(this).parent().css("border", "2px solid transparent");
            $(this)
                .parent()
                .find(".radio-button-label")
                .css("color", "rgb(107 114 128)");
        }
    });
});

/**
 * Form nav buttons
 */
$("#btn-fleet-size-back", registrationFormContainer).on("click", function () {
    goToFleetMakeupStep();
    return false;
});

$("#btn-fleet-size-next", registrationFormContainer).on("click", function () {
    if ($(this).has("disabled")) {
        return false;
    } else {
        goToHowOftenStep();
        return false;
    }
});

// ------------------------ STEP - HOW OFTEN -----------------------------

/**
 * A reference to the DOM container of the elements on the "how often" step.
 */
const howOftenStep = $("#how-often-step", registrationFormContainer);
howOftenStep.find("#btn-how-often-next").prop("disabled", true);
howOftenStep.find("#btn-how-often-next").addClass("disabled");

$("#radio-7,#radio-8,#radio-9").parent().hover(radioIn, radioOut);

$("#radio-7,#radio-8,#radio-9").on("click", function () {
    if ($(this).find(".w-checkbox-input").is(":checked")) {
        $("#btn-how-often-next").addClass("disabled");
        $("#btn-how-often-next").prop("disabled", true);
        $("#btn-how-often-next").attr("onclick", "return false;");
        $(this).next(".radio-outer").removeClass("active");
    } else {
        $("#btn-how-often-next").removeClass("disabled");
        $("#btn-how-often-next").attr("onclick", "goToBusinessTypeStep();");
        $(this).parent().css("background-color", "rgb(255 225 210)");
        $(this).parent().css("border", "2px solid #f47633");
        $(this).parent().find(".radio-button-label").css("color", "#f47633");
        $(this).next(".radio-outer").addClass("active");
    }

    $("#radio-7,#radio-8,#radio-9").each(function () {
        if (!$(this).is(":checked")) {
            $(this).next(".radio-outer").removeClass("active");
            $(this).parent().css("background-color", "white");
            $(this).parent().css("border", "2px solid transparent");
            $(this)
                .parent()
                .find(".radio-button-label")
                .css("color", "rgb(107 114 128)");
        }
    });
});

/**
 * Form nav buttons
 */
$("#btn-how-often-back", registrationFormContainer).on("click", function () {
    goToFleetSizeStep();
    return false;
});

$("#btn-how-often-next", registrationFormContainer).on("click", function () {
    if ($(this).has("disabled")) {
        return false;
    } else {
        goToBusinessTypeStep();
        return false;
    }
});

// ------------------------ STEP - BUSINESS TYPE -----------------------------

/**
 * A reference to the DOM container of the elements on the "business type" step.
 */
const businessTypeStep = $("#business-type-step", registrationFormContainer);
businessTypeStep.find("#btn-business-type-next").prop("disabled", true);
businessTypeStep.find("#btn-business-type-next").addClass("disabled");

$("#radio-10,#radio-11,#radio-12,#radio-13").parent().hover(radioIn, radioOut);

$("#radio-10,#radio-11,#radio-12,#radio-13").on("click", function () {
    if ($(this).find(".w-checkbox-input").is(":checked")) {
        $("#btn-business-type-next").addClass("disabled");
        $("#btn-business-type-next").prop("disabled", true);
        $("#btn-business-type-next").attr("onclick", "return false;");
        $(this).next(".radio-outer").removeClass("active");
    } else {
        $("#btn-business-type-next").removeClass("disabled");
        $("#btn-business-type-next").attr("onclick", "goToRoleStep();");
        $(this).parent().css("background-color", "rgb(255 225 210)");
        $(this).parent().css("border", "2px solid #f47633");
        $(this).parent().find(".radio-button-label").css("color", "#f47633");
        $(this).next(".radio-outer").addClass("active");
        $(this).parent().find(".checkbox-label").css("color", "#f47633");
        $(this).parent().find(".svg-icon-form").css("color", "#f47633");
    }

    $("#radio-10,#radio-11,#radio-12,#radio-13").each(function () {
        if (!$(this).is(":checked")) {
            $(this).next(".radio-outer").removeClass("active");
            $(this).parent().css("background-color", "white");
            $(this).parent().css("border", "2px solid transparent");
            $(this)
                .parent()
                .find(".radio-button-label")
                .css("color", "rgb(107 114 128)");
            $(this).parent().find(".checkbox-label").css("color", "#6b7280");
            $(this).parent().find(".svg-icon-form").css("color", "#6b7280");
        }
    });
});

/**
 * Form nav buttons
 */
$("#btn-business-type-back", registrationFormContainer).on(
    "click",
    function () {
        goToHowOftenStep();
        return false;
    }
);

$("#btn-business-type-next", registrationFormContainer).on(
    "click",
    function () {
        if ($(this).has("disabled")) {
            return false;
        } else {
            goToRoleStep();
            return false;
        }
    }
);

// ------------------------ STEP - ROLE -----------------------------

/**
 * A reference to the DOM container of the elements on the "role" step.
 */
const roleStep = $("#role-step", registrationFormContainer);
roleStep.find("#btn-role-next").prop("disabled", true);
roleStep.find("#btn-role-next").addClass("disabled");

$("#radio-14,#radio-15,#radio-16,#radio-17,#radio-18")
    .parent()
    .hover(radioIn, radioOut);

$("#radio-14,#radio-15,#radio-16,#radio-17,#radio-18").on("click", function () {
    if ($(this).find(".w-checkbox-input").is(":checked")) {
        $("#btn-role-next").addClass("disabled");
        $("#btn-role-next").prop("disabled", true);
        $("#btn-role-next").attr("onclick", "return false;");
        $(this).next(".radio-outer").removeClass("active");
    } else {
        $("#btn-role-next").removeClass("disabled");
        $("#btn-role-next").attr("onclick", "goToCompanyInformationStep();");
        $(this).parent().css("background-color", "rgb(255 225 210)");
        $(this).parent().css("border", "2px solid #f47633");
        $(this).parent().find(".radio-button-label").css("color", "#f47633");
        $(this).next(".radio-outer").addClass("active");
    }

    $("#radio-14,#radio-15,#radio-16,#radio-17,#radio-18").each(function () {
        if (!$(this).is(":checked")) {
            $(this).next(".radio-outer").removeClass("active");
            $(this).parent().css("background-color", "white");
            $(this).parent().css("border", "2px solid transparent");
            $(this)
                .parent()
                .find(".radio-button-label")
                .css("color", "rgb(107 114 128)");
        }
    });
});

/**
 * Form nav buttons
 */
$("#btn-role-back", registrationFormContainer).on("click", function () {
    goToBusinessTypeStep();
});

$("#btn-role-next", registrationFormContainer).on("click", function () {
    if ($(this).has("disabled")) {
        return false;
    } else {
        goToCompanyInformationStep();
        return false;
    }
});

// ------------------------ STEP - NAME AND COMPANY -----------------------------

/**
 * A reference to the DOM container of the elements on the "name and company" step.
 */
const companyInformationStep = $(
    "#company-information-step",
    registrationFormContainer
);

companyInformationStep
    .find("#btn-company-information-next")
    .prop("disabled", true);
companyInformationStep
    .find("#btn-company-information-next")
    .addClass("disabled");

$("#name-field").keyup(function () {
    validateName();
});

$("#company-name-field").keyup(function () {
    validateCompanyName();
});

$("#email-field").keyup(function () {
    validateEmail();
});

let emailErrorMessageDisplayed = false;
let isNameValid = false;
let isCompanyNameValid = false;

function validateName() {
    let inputValue = $("#name-field").val();
    if (inputValue.length > 0) {
        $("#name-field").css("border", "2px solid rgb(0 51 160)");
        isNameValid = true;
    } else {
        isNameValid = false;
    }
}

function validateCompanyName() {
    let inputValue = $("#company-name-field").val();
    if (inputValue.length > 0) {
        $("#company-name-field").css("border", "2px solid rgb(0 51 160)");
        isCompanyNameValid = true;
    } else {
        isCompanyNameValid = false;
    }
}

function validateEmail() {
    let isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let inputValue = $("#email-field").val();
    if (inputValue.match(isValidEmail) && isNameValid && isCompanyNameValid) {
        $("#btn-company-information-next").removeClass("disabled");
        $("#btn-company-information-next").attr(
            "onclick",
            "goToPhoneNumberStep();"
        );
        $("#email-field").css("border", "2px solid rgb(0 51 160)");
        if (emailErrorMessageDisplayed == true) {
            $("#error-email").detach();
            emailErrorMessageDisplayed = false;
        }
    } else {
        $("#btn-company-information-next").addClass("disabled");
        $("#btn-company-information-next").prop("disabled", true);
        $("#btn-company-information-next").attr("onclick", "return false;");
        $("#email-field").css("border", "2px solid red");
        if (emailErrorMessageDisplayed == false) {
            $("#email-wrap").append(
                "<p id='error-email' style='color:red;'>Please enter a valid value.</p>"
            );
            emailErrorMessageDisplayed = true;
        }
    }
}

/**
 * Form nav buttons
 */
$("#btn-company-information-back", registrationFormContainer).on(
    "click",
    function () {
        goToRoleStep();
    }
);

$("#btn-company-information-next", registrationFormContainer).on(
    "click",
    function () {
        if ($(this).has("disabled")) {
            return false;
        } else {
            goToPhoneNumberStep();
            return false;
        }
    }
);

// ------------------------ STEP - PHONE NUMBER -----------------------------

/**
 * A reference to the DOM container of the elements on the "phone number" step.
 */
const phoneNumberStep = $("#phone-number-step", registrationFormContainer);
phoneNumberStep.find("#btn-phone-number-next").prop("disabled", true);
phoneNumberStep.find("#btn-phone-number-next").addClass("disabled");

$("#phone-field").keyup(function () {
    validatePhone();
});

let phoneErrorMessageDisplayed = false;

function validatePhone() {
    let isValidPhone = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
    let inputValue = $("#phone-field").val();
    if (inputValue.match(isValidPhone)) {
        $("#btn-phone-number-next").removeClass("disabled");
        $("#btn-phone-number-next").attr("onclick", "goToThankYouStep()");
        $("#phone-field").css("border", "2px solid rgb(0 51 160)");
        if (phoneErrorMessageDisplayed == true) {
            $("#error-phone").detach();
            phoneErrorMessageDisplayed = false;
        }
    } else {
        $("#btn-phone-number-next").addClass("disabled");
        $("#btn-phone-number-next").prop("disabled", true);
        $("#btn-phone-number-next").attr("onclick", "return false;");
        $("#phone-field").css("border", "2px solid red");
        if (phoneErrorMessageDisplayed == false) {
            $("#phone-wrap").append(
                "<p id='error-phone' style='color:red;'>Please enter a valid value.</p>"
            );
            phoneErrorMessageDisplayed = true;
        }
    }
}

/**
 * Form nav buttons
 */
$("#btn-phone-number-back", registrationFormContainer).on("click", function () {
    goToCompanyInformationStep();
});

$("#btn-phone-number-next", registrationFormContainer).on("click", function () {
    if ($(this).has("disabled")) {
        return false;
    } else {
        goToThankYouStep();
        finalFormSubmission();
        return false;
    }
});

// ------------------------ STEP - THANK YOU  -----------------------------

/**
 * A reference to the DOM container of the elements on the "thank you" step.
 */

const thankYouStep = $("#thank-you-step", registrationFormContainer);

// ======================== STEPS END ===================================

/**
 * Manually triggers the given Webflow Slider navigation element/control
 * @param {*} navControl
 */
const triggerWebflowSliderNavigationControl = (navControl) => {
    /*
        Triggering the "click" event causes navigation to occur
     */
    navControl.trigger("click");
};

/**
 * Returns a reference to the Webflow Slider navigation control at the given index
 * @param {*} index
 */
const getWebflowSliderNavigationControl = (index) => {
    const sliderNavContainer = $(".w-slider-nav"); // Webflow slider navigation container
    const navItems = $(".w-slider-dot", sliderNavContainer); // Webflow sider navigation items
    return $(navItems.get(index));
};

/**
 * Gets a reference to the given navigation control within the Registration Form
 * @param {*} index
 */
const getRegistrationFormNavigationControl = (index) => {
    return getWebflowSliderNavigationControl(index);
};

/**
 * Goes to the First step of the form
 */
const goToEarlyAccessStep = () => {
    triggerWebflowSliderNavigationControl(
        getRegistrationFormNavigationControl(
            REGISTRATION_FORM_STEPS.EARLY_ACCESS_STEP
        )
    );
};
/**
 * Goes to the service type step
 */
const goToServiceTypeStep = () => {
    triggerWebflowSliderNavigationControl(
        getRegistrationFormNavigationControl(
            REGISTRATION_FORM_STEPS.SERVICE_TYPE_STEP
        )
    );
};

/**
 * Goes to the location step
 */
const goToLocationsStep = () => {
    triggerWebflowSliderNavigationControl(
        getRegistrationFormNavigationControl(
            REGISTRATION_FORM_STEPS.LOCATIONS_STEP
        )
    );
};

/**
 * Goes to the zip code step
 */
const goToZipCodeStep = () => {
    triggerWebflowSliderNavigationControl(
        getRegistrationFormNavigationControl(
            REGISTRATION_FORM_STEPS.ZIP_CODE_STEP
        )
    );
};

/**
 * Goes to the fleet make up step
 */
const goToFleetMakeupStep = () => {
    triggerWebflowSliderNavigationControl(
        getRegistrationFormNavigationControl(
            REGISTRATION_FORM_STEPS.FLEET_MAKEUP_STEP
        )
    );
};

/**
 * Goes to the fleet size step
 */
const goToFleetSizeStep = () => {
    triggerWebflowSliderNavigationControl(
        getRegistrationFormNavigationControl(
            REGISTRATION_FORM_STEPS.FLEET_SIZE_STEP
        )
    );
};

/**
 * Goes to the 'how often do you need service' step
 */
const goToHowOftenStep = () => {
    triggerWebflowSliderNavigationControl(
        getRegistrationFormNavigationControl(
            REGISTRATION_FORM_STEPS.HOW_OFTEN_STEP
        )
    );
};

/**
 * Goes to the business type step
 */
const goToBusinessTypeStep = () => {
    triggerWebflowSliderNavigationControl(
        getRegistrationFormNavigationControl(
            REGISTRATION_FORM_STEPS.BUSINESS_TYPE_STEP
        )
    );
};

/**
 * Goes to the company role step
 */
const goToRoleStep = () => {
    triggerWebflowSliderNavigationControl(
        getRegistrationFormNavigationControl(REGISTRATION_FORM_STEPS.ROLE_STEP)
    );
};

/**
 * Goes to the company information step
 */
const goToCompanyInformationStep = () => {
    triggerWebflowSliderNavigationControl(
        getRegistrationFormNavigationControl(
            REGISTRATION_FORM_STEPS.COMPANY_INFORMATION_STEP
        )
    );
};

/**
 * Goes to the phone number step
 */
const goToPhoneNumberStep = () => {
    triggerWebflowSliderNavigationControl(
        getRegistrationFormNavigationControl(
            REGISTRATION_FORM_STEPS.PHONE_NUMBER_STEP
        )
    );
};

/**
 * Goes to the thank you message step
 */
const goToThankYouStep = () => {
    triggerWebflowSliderNavigationControl(
        getRegistrationFormNavigationControl(
            REGISTRATION_FORM_STEPS.THANK_YOU_STEP
        )
    );
    finalFormSubmission();
};

$("#btn-start-now", registrationFormContainer).on("click", function () {
    goToServiceTypeStep();
});

/**
 *  Checkbox Icons Correction - When window is less than 992px and the checkbox becomes horizontal,
 *  Webflow messes up the order of checkbox -> icon -> checkbox label. This corrects this.
 */

var $window = $(window);
var breakpoint = 992;
var last = $window.width() > breakpoint;

$window.on("resize", function () {
    var wWwidth = $window.width();
    var isLarger = wWwidth >= breakpoint;

    if (last !== isLarger) {
        if (isLarger) {
            onLargerChange();
        } else {
            onSmallerChange();
        }
        last = isLarger;
    }
});

function onLargerChange() {
    $(".checkbox-big").each(function (i, obj) {
        $(this).find(".checkbox-label").detach().prependTo($(this));
        $(this).find(".w-checkbox-input").detach().prependTo($(this));
    });
}

function onSmallerChange() {
    //gets all checkboxes and swaps the label to the end on smaller sizes
    $(".checkbox-big").each(function (i, obj) {
        $(this).find(".checkbox-label").detach().appendTo($(this));
    });
}

//this function works on load to check if window is already on mobile, instead of on breakpoint change
$().ready(function () {
    if (window.matchMedia("(max-width: 992px)").matches) {
        $(".checkbox-big").each(function (i, obj) {
            $(this).find(".checkbox-label").detach().appendTo($(this));
        });
    }
});

/**
 *  Menu Open Check
 */

if ($(".bg-menu-overlay").is(":visible")) {
    $("body").addClass("fixed-position");
} else {
    $("body").removeClass("fixed-position");
}

/**
 * Gets all the UTMs being passed as soon as the use enters the page
 */
const pageUTMs = window.location.search;

/**
 *  Final Form Submission Function
 */

function finalFormSubmission() {
    // serialize takes the form fields name and value and creates query string
    const serialize = $("form").serialize();
    const UTM_URL = serialize.concat(`&${pageUTMs.replace("?", "")}`);
    const finalQuery = UTM_URL.concat(
        "&Campaign_ID__c=7018B000000Hw6iQAC&GCLID__c=testing_gclid"
    );
    const URL =
        "https://rydermm--qa.my.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&debug=1&debugEmail=mobilemaintenance@doublenines.co&oid=00D8B0000008hPZ&";
    const finalURL = URL.concat(finalQuery);

    fetch(finalURL, {
        method: "POST",
    });
}

