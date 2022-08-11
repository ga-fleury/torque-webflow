/**
 * A enum-like structure to make it easier to reference the indexes of the different
 * steps on the Registration Form slider/carousel.
 */
 const REGISTRATION_FORM_STEPS = {
    EARLY_ACCESS_STEP: 0,
    PROFILE_STEP: 1,
    KNOWN_COMPANY_STEP: 2,
    UNKNOWN_COMPANY_STEP: 3,
    ACCOUNT_PENDING_STEP: 4,
    ACCOUNT_ACCEPTED_STEP: 5,
    ACCOUNT_REJECTED_STEP: 6,
    ERROR_STEP: 7,
    ACCOUNT_EXISTS_STEP: 8
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
const companyProfileStep = $('#profile-step', registrationFormContainer);

/**
 * Reference to the HTML form element that contains the field inputs for the first
 * step on the Registration form (Company Profile).
 */
const registrationForm = $('#registration-data-form', companyProfileStep);

/**
 * Gets a reference to the "I don't have a DOT" checkbox field.
 */
const getIdontHaveDotField = () => getFormField('#doNotHaveDot', registrationForm);

/**
 * Gets a reference to the DOT field.
 */
const getDotField = () => getFormField('#dot', registrationForm);

/**
 * Gets the current registration type linked to this registration form.
 */
const getRegistrationType = () => {
    const registrationTypeElement = $('#registration-type', registrationForm);
    const registrationTypeValue = registrationTypeElement.text().toLocaleLowerCase().trim();
    return REGISTRATION_TYPE[registrationTypeValue];
}

// ------------------------ STEP 2.a FIELDS (Address Confirmation - Known Company) -----------------------------

/**
 * A reference to the DOM container of the elements on the step for address confirmation for known companies.
 */
const knownAddressConfirmStep = $('#known-address-step', registrationFormContainer);

/**
 * Reference to the HTML form element that contains the field inputs for the Address Confirmation for
 * known companies.
 */
const knownAddressForm = $('#known-address-form', knownAddressConfirmStep);

/**
 * Gets a reference to the known addresses options list (the radiobuttons container).
 */
const getKnownAddressesOptionsList = () => $('#known-addresses-group', knownAddressConfirmStep);



// ------------------------ STEP 2.b FIELDS (Address Confirmation - Unknown Company) -----------------------------

/**
 * A reference to the DOM container of the elements on the step for address confirmation for known companies.
 */
const unknownAddressConfirmStep = $('#unknown-address-step', registrationFormContainer);

/**
 * Reference to the HTML form element that contains the field inputs for the Address Confirmation for
 * unknown companies.
 */
const unknownAddressForm = $('#unknown-address-form', unknownAddressConfirmStep);

/**
 * Reference to the input field where users write a custom address for unknown companies.
 */
const customAddressField = $('#custom-address', unknownAddressForm);

// ------------------------ STEP - ACCOUNT ALREADY EXISTS -----------------------------

/**
 * A reference to the DOM container of the elements on the "account already exists" step.
 */
const accountAlreadyExistsStep = $('#account-exists-step', registrationFormContainer);

// ------------------------ STEP - ACCOUNT ALREADY EXISTS -----------------------------

/**
 * A reference to the DOM container of the elements on the "account accepted" step.
 */
const accountAcceptedStep = $('#account-accepted-step', registrationFormContainer);


// ------------------------ STEP - ERROR SCREEN -----------------------------

/**
 * A reference to the DOM container of the elements on the "error" step.
 */
const errorScreenStep = $('#register-error-step', registrationFormContainer);



/**
 * Manually triggers the given Webflow Slider navigation element/control
 * @param {*} navControl 
 */
 export const triggerWebflowSliderNavigationControl = (navControl) => {
    /*
        Triggering the "click" event causes navigation to occur
     */
    navControl.trigger('click');
};

/**
 * Returns a reference to the Webflow Slider navigation control at the given index
 * @param {*} index 
 */
export const getWebflowSliderNavigationControl = (index, sliderContainer) => {
    const sliderNavContainer = $('.w-slider-nav', sliderContainer); // Webflow slider navigation container
    const navItems = $('.w-slider-dot', sliderNavContainer); // Webflow sider navigation items
    return $(navItems.get(index));
};

/**
 * Gets a reference to the given navigation control within the Registration Form
 * @param {*} index 
 */
 const getRegistrationFormNavigationControl = (index) => {
    return getWebflowSliderNavigationControl(index, registrationFormContainer);
};