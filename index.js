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
    INFORMATION_STEP: 9,
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

 // ------------------------ STEP 1 FIELDS (Company Profile) -----------------------------

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

// ------------------------ STEP 2.a FIELDS (Address Confirmation - Known Company) -----------------------------

/**
 * A reference to the DOM container of the elements on the step for address confirmation for known companies.
 */
const serviceTypeStep = $('#service-type-step', registrationFormContainer);

/**
 * Reference to the HTML form element that contains the field inputs for the Address Confirmation for
 * known companies.
 */
const knownAddressForm = $('#known-address-form');

/**
 * Gets a reference to the known addresses options list (the radiobuttons container).
 */
const getKnownAddressesOptionsList = () => $('#known-addresses-group');



// ------------------------ STEP 2.b FIELDS (Address Confirmation - Unknown Company) -----------------------------

/**
 * A reference to the DOM container of the elements on the step for address confirmation for known companies.
 */
const unknownAddressConfirmStep = $('#unknown-address-step');

/**
 * Reference to the HTML form element that contains the field inputs for the Address Confirmation for
 * unknown companies.
 */
const unknownAddressForm = $('#unknown-address-form');

/**
 * Reference to the input field where users write a custom address for unknown companies.
 */
const customAddressField = $('#custom-address');

// ------------------------ STEP - ACCOUNT ALREADY EXISTS -----------------------------

/**
 * A reference to the DOM container of the elements on the "account already exists" step.
 */
const accountAlreadyExistsStep = $('#account-exists-step');

// ------------------------ STEP - ACCOUNT ALREADY EXISTS -----------------------------

/**
 * A reference to the DOM container of the elements on the "account accepted" step.
 */
const accountAcceptedStep = $('#account-accepted-step');


// ------------------------ STEP - ERROR SCREEN -----------------------------

/**
 * A reference to the DOM container of the elements on the "error" step.
 */
const errorScreenStep = $('#register-error-step');



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
 const goToServiceTypeStep = () => {
    triggerWebflowSliderNavigationControl(getRegistrationFormNavigationControl(REGISTRATION_FORM_STEPS.SERVICE_TYPE_STEP));
    console.log("service type")
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
 const goToInformationStep = () => {
    triggerWebflowSliderNavigationControl(getRegistrationFormNavigationControl(REGISTRATION_FORM_STEPS.INFORMATION_STEP));
};

/**
 * Goes to the Registration form main screen.
 */
 const goToPhoneNumberStep = () => {
    triggerWebflowSliderNavigationControl(getRegistrationFormNavigationControl(REGISTRATION_FORM_STEPS.PHONE_NUMBER_STEP));
};

$('#btn-start-now', registrationFormContainer).on('click', function() {
    goToServiceTypeStep();
    console.log("btn clicked")
});