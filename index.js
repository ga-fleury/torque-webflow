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
}

// ----------------------- Some shared DOM elements --------------------------------

/**
 * The selector for the main container of the Registration Form.
 */
 const registrationFormContainerSelector = '#reg-form-container';

 /**
  * Reference to the main container (DOM element) of the whole Registration Form. 
  * This container is the DOM parent of all the registration steps/screens in the slider/carousel.
  */
 const registrationFormContainer = $(registrationFormContainerSelector);

 // ------------------------ STEP 1 FIELDS (Early Access) -----------------------------

/**
 * A reference to the DOM container of the elements on the first step.
 */
const earlyAccessStep = $('#early-access-step', registrationFormContainer);

/**
 * Reference to the HTML form element that contains the field inputs for the first
 * step on the Registration form (Company Profile).
 */
const registrationForm = $('#registration-data-form');

/**
 * Gets a reference to the "I don't have a DOT" checkbox field.
 */
const getIdontHaveDotField = () => getFormField('#doNotHaveDot');

/**
 * Gets a reference to the DOT field.
 */
const getDotField = () => getFormField('#dot');

/**
 * Gets the current registration type linked to this registration form.
 */
const getRegistrationType = () => {
    const registrationTypeElement = $('#registration-type');
    const registrationTypeValue = registrationTypeElement.text().toLocaleLowerCase().trim();
    return REGISTRATION_TYPE[registrationTypeValue];
}

// ------------------------ STEP - SERVICE TYPE -----------------------------

/**
 * A reference to the DOM container of the elements on the step for service selection.
 */
const serviceTypeStep = $('#service-type-step', registrationFormContainer);

/**
 * Form nav buttons
 */
$('#btn-service-type-back', registrationFormContainer).on('click', function() {
    goToEarlyAccessStep();
});

$('#btn-service-type-next', registrationFormContainer).on('click', function() {
    goToLocationsStep();
});


// ------------------------ STEP - LOCATIONS -----------------------------

/**
 * A reference to the DOM container of the elements on the "error" step.
 */
const locationsStep = $('#locations-step', registrationFormContainer);

/**
 * Form nav buttons
 */
 $('#btn-locations-back', registrationFormContainer).on('click', function() {
    goToServiceTypeStep();
});

$('#btn-locations-next', registrationFormContainer).on('click', function() {
    goToZipCodeStep();
});

// ------------------------ STEP - ZIP CODE -----------------------------

/**
 * A reference to the DOM container of the elements on the "error" step.
 */
const zipCodeStep = $('#zip-code-step', registrationFormContainer);

/**
 * Form nav buttons
 */
 $('#btn-zip-code-back', registrationFormContainer).on('click', function() {
    goToLocationsStep();
});

$('#btn-zip-code-next', registrationFormContainer).on('click', function() {
    goToFleetMakeupStep();
});

// ------------------------ STEP - FLEET MAKEUP -----------------------------

/**
 * A reference to the DOM container of the elements on the "error" step.
 */
const fleetMakeupStep = $('#fleet-makeup-step', registrationFormContainer);

/**
 * Form nav buttons
 */
 $('#btn-fleet-makeup-back', registrationFormContainer).on('click', function() {
    goToZipCodeStep();
});

$('#btn-fleet-makeup-next', registrationFormContainer).on('click', function() {
    goToFleetSizeStep();
});

// ------------------------ STEP - FLEET SIZE -----------------------------

/**
 * A reference to the DOM container of the elements on the "error" step.
 */
const fleetSizeStep = $('#fleet-size-step', registrationFormContainer);

/**
 * Form nav buttons
 */
 $('#btn-fleet-size-back', registrationFormContainer).on('click', function() {
    goToFleetMakeupStep();
});

$('#btn-fleet-size-next', registrationFormContainer).on('click', function() {
    goToHowOftenStep();
});

// ------------------------ STEP - HOW OFTEN -----------------------------

/**
 * A reference to the DOM container of the elements on the "error" step.
 */
const howOftenStep = $('#how-often-step', registrationFormContainer);

/**
 * Form nav buttons
 */
 $('#btn-how-often-back', registrationFormContainer).on('click', function() {
    goToFleetSizeStep();
});

$('#btn-how-often-next', registrationFormContainer).on('click', function() {
    goToBusinessTypeStep();
});

// ------------------------ STEP - BUSINESS TYPE -----------------------------

/**
 * A reference to the DOM container of the elements on the "error" step.
 */
const businessTypeStep = $('#business-type-step', registrationFormContainer);

/**
 * Form nav buttons
 */
 $('#btn-business-type-back', registrationFormContainer).on('click', function() {
    goToHowOftenStep();
});

$('#btn-business-type-next', registrationFormContainer).on('click', function() {
    goToRoleStep();
});

// ------------------------ STEP - ROLE -----------------------------

/**
 * A reference to the DOM container of the elements on the "error" step.
 */
const roleStep = $('#role-step', registrationFormContainer);

/**
 * Form nav buttons
 */
 $('#btn-role-back', registrationFormContainer).on('click', function() {
    goToBusinessTypeStep();
});

$('#btn-role-next', registrationFormContainer).on('click', function() {
    goToCompanyInformationStep();
});

// ------------------------ STEP - NAME AND COMPANY -----------------------------

/**
 * A reference to the DOM container of the elements on the "error" step.
 */
const companyInformationStep = $('#company-information-step', registrationFormContainer);

/**
 * Form nav buttons
 */
 $('#btn-company-information-back', registrationFormContainer).on('click', function() {
    goToRoleStep();
});

$('#btn-company-information-next', registrationFormContainer).on('click', function() {
    goToPhoneNumberStep();
});

// ------------------------ STEP - PHONE NUMBER -----------------------------

/**
 * A reference to the DOM container of the elements on the "error" step.
 */
const phoneNumberStep = $('#phone-number-step', registrationFormContainer);

/**
 * Form nav buttons
 */
 $('#btn-phone-number-back', registrationFormContainer).on('click', function() {
    goToCompanyInformationStep();
});

$('#btn-phone-number-next', registrationFormContainer).on('click', function() {
    finalFormSubmission();
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
    navControl.trigger('click');
};

/**
 * Returns a reference to the Webflow Slider navigation control at the given index
 * @param {*} index 
 */
const getWebflowSliderNavigationControl = (index) => {
    const sliderNavContainer = $('.w-slider-nav'); // Webflow slider navigation container
    const navItems = $('.w-slider-dot', sliderNavContainer); // Webflow sider navigation items
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
    triggerWebflowSliderNavigationControl(getRegistrationFormNavigationControl(REGISTRATION_FORM_STEPS.EARLY_ACCESS_STEP));
};
/**
 * Goes to the Registration Form "error" step.
 */
 const goToServiceTypeStep = () => {
    triggerWebflowSliderNavigationControl(getRegistrationFormNavigationControl(REGISTRATION_FORM_STEPS.SERVICE_TYPE_STEP));
};

/**
 * Goes to the Registration "success" screen.
 */
const goToLocationsStep = () => {
    triggerWebflowSliderNavigationControl(getRegistrationFormNavigationControl(REGISTRATION_FORM_STEPS.LOCATIONS_STEP));
};

/**
 * Goes to the screen for users with already existing accounts.
 */
const goToZipCodeStep = () => {
    triggerWebflowSliderNavigationControl(getRegistrationFormNavigationControl(REGISTRATION_FORM_STEPS.ZIP_CODE_STEP));
};

/**
 * Goes to the screen for users that were put on a Pending Account.
 */
const goToFleetMakeupStep = () => {
    triggerWebflowSliderNavigationControl(getRegistrationFormNavigationControl(REGISTRATION_FORM_STEPS.FLEET_MAKEUP_STEP));
};

/**
 * Goes to the screen for users that were rejected for Registration.
 */
const goToFleetSizeStep = () => {
    triggerWebflowSliderNavigationControl(getRegistrationFormNavigationControl(REGISTRATION_FORM_STEPS.FLEET_SIZE_STEP));
};

/**
 * Goes to the Registration form main screen.
 */
const goToHowOftenStep = () => {
    triggerWebflowSliderNavigationControl(getRegistrationFormNavigationControl(REGISTRATION_FORM_STEPS.HOW_OFTEN_STEP));
};

/**
 * Goes to the Registration form main screen.
 */
 const goToBusinessTypeStep = () => {
    triggerWebflowSliderNavigationControl(getRegistrationFormNavigationControl(REGISTRATION_FORM_STEPS.BUSINESS_TYPE_STEP));
};

/**
 * Goes to the Registration form main screen.
 */
 const goToRoleStep = () => {
    triggerWebflowSliderNavigationControl(getRegistrationFormNavigationControl(REGISTRATION_FORM_STEPS.ROLE_STEP));
};

/**
 * Goes to the Registration form main screen.
 */
 const goToCompanyInformationStep = () => {
    triggerWebflowSliderNavigationControl(getRegistrationFormNavigationControl(REGISTRATION_FORM_STEPS.COMPANY_INFORMATION_STEP));
};

/**
 * Goes to the Registration form main screen.
 */
 const goToPhoneNumberStep = () => {
    triggerWebflowSliderNavigationControl(getRegistrationFormNavigationControl(REGISTRATION_FORM_STEPS.PHONE_NUMBER_STEP));
};

$('#btn-start-now', registrationFormContainer).on('click', function() {
    goToServiceTypeStep();
});
