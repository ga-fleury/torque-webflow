console.log("loaded");

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

// ------------------------ STEP 1 FIELDS (Early Access) -----------------------------

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

const checkboxesServiceType = $("#checkbox11,#checkbox12,#checkbox13");

checkboxesServiceType.on("click", function () {
    if ($(this).find(".w-checkbox-input").hasClass("w--redirected-checked")) {
        $("#btn-service-type-next").addClass("disabled");
        $("#btn-service-type-next").prop("disabled", true);
        $("#btn-service-type-next").attr("onclick", "return false;");
    } else {
        $("#btn-service-type-next").removeClass("disabled");
        $("#btn-service-type-next").attr("onclick", "goToLocationsStep();");
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
 * A reference to the DOM container of the elements on the "error" step.
 */
const locationsStep = $("#locations-step", registrationFormContainer);
locationsStep.find("#btn-location-next").prop("disabled", true);
locationsStep.find("#btn-location-next").addClass("disabled");

$("#radio-1,#radio-2").on("click", function () {
    if ($(this).find(".w-checkbox-input").checked) {
        $("#btn-location-next").addClass("disabled");
        $("#btn-location-next").prop("disabled", true);
        $("#btn-location-next").attr("onclick", "return false;");
    } else {
        $("#btn-location-next").removeClass("disabled");
        $("#btn-location-next").attr("onclick", "goToZipCodeStep();");
    }
});

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

$("#zip-code-field").keyup(function () {
    validateZipCode();
});

function validateZipCode() {
    const isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
    const inputValue = $("#zip-code-field").val();
    if (inputValue.match(isValidZip)) {
        $("#btn-zip-code-next").removeClass("disabled");
        $("#btn-zip-code-next").attr("onclick", "goToFleetMakeupStep();");
    } else {
        $("#btn-zip-code-next").addClass("disabled");
        $("#btn-zip-code-next").prop("disabled", true);
        $("#btn-zip-code-next").attr("onclick", "return false;");
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
 * A reference to the DOM container of the elements on the "error" step.
 */
const fleetMakeupStep = $("#fleet-makeup-step", registrationFormContainer);
fleetMakeupStep.find("#btn-fleet-makeup-next").prop("disabled", true);
fleetMakeupStep.find("#btn-fleet-makeup-next").addClass("disabled");

$("#checkbox21,#checkbox22,#checkbox23,#checkbox24").on("click", function () {
    if ($(this).find(".w-checkbox-input").hasClass("w--redirected-checked")) {
        $("#btn-fleet-makeup-next").addClass("disabled");
        $("#btn-fleet-makeup-next").prop("disabled", true);
        $("#btn-fleet-makeup-next").attr("onclick", "return false;");
    } else {
        $("#btn-fleet-makeup-next").removeClass("disabled");
        $("#btn-fleet-makeup-next").attr("onclick", "goToFleetSizeStep();");
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
 * A reference to the DOM container of the elements on the "error" step.
 */
const fleetSizeStep = $("#fleet-size-step", registrationFormContainer);
fleetSizeStep.find("#btn-fleet-size-next").prop("disabled", true);
fleetSizeStep.find("#btn-fleet-size-next").addClass("disabled");

$("#radio-3,#radio-4,#radio-5,#radio-6").on("click", function () {
    if ($(this).find(".w-checkbox-input").hasClass("w--redirected-checked")) {
        $("#btn-fleet-size-next").addClass("disabled");
        $("#btn-fleet-size-next").prop("disabled", true);
        $("#btn-fleet-size-next").attr("onclick", "return false;");
    } else {
        $("#btn-fleet-size-next").removeClass("disabled");
        $("#btn-fleet-size-next").attr("onclick", "goToHowOftenStep();");
    }
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
 * A reference to the DOM container of the elements on the "error" step.
 */
const howOftenStep = $("#how-often-step", registrationFormContainer);
howOftenStep.find("#btn-how-often-next").prop("disabled", true);
howOftenStep.find("#btn-how-often-next").addClass("disabled");

$("#radio-7,#radio-8,#radio-9").on("click", function () {
    if ($(this).find(".w-checkbox-input").hasClass("w--redirected-checked")) {
        $("#btn-how-often-next").addClass("disabled");
        $("#btn-how-often-next").prop("disabled", true);
        $("#btn-how-often-next").attr("onclick", "return false;");
    } else {
        $("#btn-how-often-next").removeClass("disabled");
        $("#btn-how-often-next").attr("onclick", "goToBusinessTypeStep();");
    }
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
 * A reference to the DOM container of the elements on the "error" step.
 */
const businessTypeStep = $("#business-type-step", registrationFormContainer);
businessTypeStep.find("#btn-business-type-next").prop("disabled", true);
businessTypeStep.find("#btn-business-type-next").addClass("disabled");

$("#radio-10,#radio-11,#radio-12,#radio-13").on("click", function () {
    if ($(this).find(".w-checkbox-input").hasClass("w--redirected-checked")) {
        $("#btn-business-type-next").addClass("disabled");
        $("#btn-business-type-next").prop("disabled", true);
        $("#btn-business-type-next").attr("onclick", "return false;");
    } else {
        $("#btn-business-type-next").removeClass("disabled");
        $("#btn-business-type-next").attr("onclick", "goToRoleStep();");
    }
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
 * A reference to the DOM container of the elements on the "error" step.
 */
const roleStep = $("#role-step", registrationFormContainer);
roleStep.find("#btn-role-next").prop("disabled", true);
roleStep.find("#btn-role-next").addClass("disabled");

$("#radio-14,#radio-15,#radio-16,#radio-17,#radio-18").on("click", function () {
    if ($(this).find(".w-checkbox-input").hasClass("w--redirected-checked")) {
        $("#btn-role-next").addClass("disabled");
        $("#btn-role-next").prop("disabled", true);
        $("#btn-role-next").attr("onclick", "return false;");
    } else {
        $("#btn-role-next").removeClass("disabled");
        $("#btn-role-next").attr("onclick", "goToCompanyInformationStep();");
    }
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
 * A reference to the DOM container of the elements on the "error" step.
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

function validateName() {
    let inputValue = $("#name-field").val();
    inputValue > 0 ? true : false;
}

function validateCompanyName() {
    let inputValue = $("#company-name-field").val();
    inputValue > 0 ? true : false;
}

function validateEmail() {
    let isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let inputValue = $("#email-field").val();
    if (inputValue.match(isValidEmail)) {
        $("#btn-company-information-next").removeClass("disabled");
        $("#btn-company-information-next").attr("onclick", "goToPhoneNumberStep();");
    } else {
        $("#btn-company-information-next").addClass("disabled");
        $("#btn-company-information-next").prop("disabled", true);
        $("#btn-company-information-next").attr("onclick", "return false;");
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
 * A reference to the DOM container of the elements on the "error" step.
 */
const phoneNumberStep = $("#phone-number-step", registrationFormContainer);
phoneNumberStep.find("#btn-phone-number-next").prop("disabled", true);
phoneNumberStep.find("#btn-phone-number-next").addClass("disabled");

$("#phone-field").keyup(function () {
    validatePhone();
});

function validatePhone() {
    let isValidPhone = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
    let inputValue = $("#phone-field").val();
    if (inputValue.match(isValidPhone)) {
        $("#btn-phone-number-next").removeClass("disabled");
        $("#btn-phone-number-next").attr("onclick", "finalFormSubmission();");
    } else {
        $("#btn-phone-number-next").addClass("disabled");
        $("#btn-phone-number-next").prop("disabled", true);
        $("#btn-phone-number-next").attr("onclick", "return false;");
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
        finalFormSubmission();
        return false;
    }
});

// TODO
// [] FORM SUBMISSION FUNCTION

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
 * Goes to the Registration Form "error" step.
 */
const goToEarlyAccessStep = () => {
    triggerWebflowSliderNavigationControl(
        getRegistrationFormNavigationControl(
            REGISTRATION_FORM_STEPS.EARLY_ACCESS_STEP
        )
    );
};
/**
 * Goes to the Registration Form "error" step.
 */
const goToServiceTypeStep = () => {
    triggerWebflowSliderNavigationControl(
        getRegistrationFormNavigationControl(
            REGISTRATION_FORM_STEPS.SERVICE_TYPE_STEP
        )
    );
};

/**
 * Goes to the Registration "success" screen.
 */
const goToLocationsStep = () => {
    triggerWebflowSliderNavigationControl(
        getRegistrationFormNavigationControl(
            REGISTRATION_FORM_STEPS.LOCATIONS_STEP
        )
    );
};

/**
 * Goes to the screen for users with already existing accounts.
 */
const goToZipCodeStep = () => {
    triggerWebflowSliderNavigationControl(
        getRegistrationFormNavigationControl(
            REGISTRATION_FORM_STEPS.ZIP_CODE_STEP
        )
    );
};

/**
 * Goes to the screen for users that were put on a Pending Account.
 */
const goToFleetMakeupStep = () => {
    triggerWebflowSliderNavigationControl(
        getRegistrationFormNavigationControl(
            REGISTRATION_FORM_STEPS.FLEET_MAKEUP_STEP
        )
    );
};

/**
 * Goes to the screen for users that were rejected for Registration.
 */
const goToFleetSizeStep = () => {
    triggerWebflowSliderNavigationControl(
        getRegistrationFormNavigationControl(
            REGISTRATION_FORM_STEPS.FLEET_SIZE_STEP
        )
    );
};

/**
 * Goes to the Registration form main screen.
 */
const goToHowOftenStep = () => {
    triggerWebflowSliderNavigationControl(
        getRegistrationFormNavigationControl(
            REGISTRATION_FORM_STEPS.HOW_OFTEN_STEP
        )
    );
};

/**
 * Goes to the Registration form main screen.
 */
const goToBusinessTypeStep = () => {
    triggerWebflowSliderNavigationControl(
        getRegistrationFormNavigationControl(
            REGISTRATION_FORM_STEPS.BUSINESS_TYPE_STEP
        )
    );
};

/**
 * Goes to the Registration form main screen.
 */
const goToRoleStep = () => {
    triggerWebflowSliderNavigationControl(
        getRegistrationFormNavigationControl(REGISTRATION_FORM_STEPS.ROLE_STEP)
    );
};

/**
 * Goes to the Registration form main screen.
 */
const goToCompanyInformationStep = () => {
    triggerWebflowSliderNavigationControl(
        getRegistrationFormNavigationControl(
            REGISTRATION_FORM_STEPS.COMPANY_INFORMATION_STEP
        )
    );
};

/**
 * Goes to the Registration form main screen.
 */
const goToPhoneNumberStep = () => {
    triggerWebflowSliderNavigationControl(
        getRegistrationFormNavigationControl(
            REGISTRATION_FORM_STEPS.PHONE_NUMBER_STEP
        )
    );
};

$("#btn-start-now", registrationFormContainer).on("click", function () {
    goToServiceTypeStep();
});

/**
 * LeadForm Checkbox Checked
 */

$(".w-checkbox").each(function (index) {
    $(this).on("click", function () {
        if (
            $(this).find(".w-checkbox-input").hasClass("w--redirected-checked")
        ) {
            $(this).css("background-color", "white");
            $(this).css("border", "none");
            $(this).find(".checkbox-label").css("color", "#6b7280");
            $(this).find(".svg-icon-form").css("color", "#6b7280");
        } else {
            $(this).css("background-color", "#ffe1d2");
            $(this).css("border", "2px solid rgb(255, 106, 19");
            $(this).find(".checkbox-label").css("color", "rgb(255, 106, 19");
            $(this).find(".svg-icon-form").css("color", "rgb(255, 106, 19");
        }
    });
});

function finalFormSubmission() {
    console.log("finalFormSubmission")
}

// $(".w-radio").each(function (index) {
//     $(this).on("click", function () {
//         if (
//             $(this).checked
//         ) {
//             $(this).css("background-color", "white");
//             $(this).css("border", "none");
//             $(this).find(".checkbox-label").css("color", "#6b7280");
//             $(this).find(".svg-icon-form").css("color", "#6b7280");
//         } else {
//             $(this).css("background-color", "#ffe1d2");
//             $(this).css("border", "2px solid rgb(255, 106, 19");
//             $(this).find(".checkbox-label").css("color", "rgb(255, 106, 19");
//             $(this).find(".svg-icon-form").css("color", "rgb(255, 106, 19");
//         }
//     });
// });
