/**
 * reference to the form element fields
 */

const firstNameField = $("#first-name");
const lastNameField = $("#last-name");
const companyEmailField = $("#company-email");
const companyNameField = $("#company-name");
const phoneNumberField = $("#phone-number");
const fleetSizeField = $("#fleet-size");
const cityField = $("#city");
const addressField = $("#address");
const stateField = $("#state");
const zipCodeField = $("#zip-code");

const referralFirstNameField = $("#referral-first-name");
const referraLlastNameField = $("#referral-last-name");
const referralSAPField = $("#referral-SAP");
const referralCompanyEmailField = $("#referral-company-email");

const commentsField = $("#comments");

const submitButton = $("#referral-submit");

/**
 * Regular expressions for each type of validation
 */

const phoneRegex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
const zipCodeRegex = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

//------------------------------- VALIDATION FUNCTION START---------------------------------

function validFieldCheck(field, validationRegex) {
    if (field.val().match(validationRegex) || field.val().length == 0) {
        $(`#error-${field.attr("id")}`).detach();
    } else if (
        !field.val().match(validationRegex) &&
        !$(`#error-${field.attr("id")}`).length
    ) {
        field.after(
            `<p id='error-${field.attr(
                "id"
            )}' style='color: red;'>Please enter a valid value.</p>`
        );
    }
}

//------------------------------- VALIDATION FUNCTION END---------------------------------

/**
 * attributing each field to its correct validation function
 */

 phoneNumberField.keyup(function () {
    validFieldCheck(phoneNumberField, phoneRegex);
});

companyEmailField.keyup(function () {
    validFieldCheck(companyEmailField, emailRegex)
});

referralCompanyEmailField.keyup(function () {
    validFieldCheck(referralCompanyEmailField, emailRegex)
});

zipCodeField.keyup(function () {
    validFieldCheck(zipCodeField, zipCodeRegex)
});

//------------------------------- SUBMIT FUNCTION ---------------------------------

/**
 //TODO        make referral submission fuction
 */

function referralSubmit() {

}