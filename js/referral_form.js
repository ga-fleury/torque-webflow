$("referral-submit").css("background", "red");

/**
 * reference to the form element fields
 */

const firstNameField = $("#first-name");
const lastNameField = $("#last-name");
const companyEmailField = ("#company-email");
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


//------------------------------- VALIDATION FUNCTIONS---------------------------------

function validatePhone(field) {
    let isValidPhone = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
    if (field.val().match(isValidPhone)) {
        if (phoneErrorMessageDisplayed == true) {
            $("#error-phone").detach();
            phoneErrorMessageDisplayed = false;
        }
    } else {
        if (phoneErrorMessageDisplayed == false) {
            field.next(
                "<p id='error-phone' style='color: aliceblue;'>Please enter a valid value.</p>"
            );
            phoneErrorMessageDisplayed = true;
        }
    }
}

function validateEmail(field) {
    let isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (field.val().match(isValidEmail)) {
        if (emailErrorMessageDisplayed == true) {
            $("#error-email").detach();
            emailErrorMessageDisplayed = false;
        }
    } else {
        if (emailErrorMessageDisplayed == false) {
            field.next(
                "<p id='error-email' style='color: aliceblue;'>Please enter a valid value.</p>"
            );
            emailErrorMessageDisplayed = true;
        }
    }
}