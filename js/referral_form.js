//TODO: REPLACE FORM WRAPPER ID WITH CORRECT FORM WRAPPER ID
//TODO: REPLACE THANK YOU MESSAGE CLASS WITH CORRECT CLASS

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
const zipCodeField = $("#zip");

const referralFirstNameField = $("#referral-first-name");
const referralLastNameField = $("#referral-last-name");
const referralSAPField = $("#referral-SAP");
const referralPhoneNumber = $("#referral-phone-number");
const referralCompanyEmailField = $("#referral-company-email");

const commentsField = $("#comments");

const submitButton = $("#referral-submit");
const referralForm = $("#referral-form");
const referralFormWrapper = $("#referral-form-wrapper");

const requiredTextFields = $(
    "#first-name, #last-name, #company-name,#referral-first-name, #referral-last-name, #referral-SAP, #referral-company-email"
);
const requiredDropdownFields = $(
    "#state, #fleet-size"
);

/**
 * Regular expressions for each type of validation
 */

const phoneRegex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
const zipCodeRegex = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const SAPRegex = /^[0-9]{1,128}$/;

$(stateField).attr('size', '5');

//------------------------------- VALIDATION FUNCTION START---------------------------------

function validFieldCheck(field, validationRegex) {
    if (field.val().match(validationRegex) || field.val().length == 0) {
        $(`#error-${field.attr("id")}`).detach();
    } else if (
        !field.val().match(validationRegex) &&
        !$(`#error-${field.attr("id")}`).length
    ) {
        field.after(
            `<p id='error-${field.attr("id")}' class='error-message' style='color: red;'>
            Please enter a valid value.
            </p>`
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

referralPhoneNumber.keyup(function () {
    validFieldCheck(referralPhoneNumber, phoneRegex);
});

companyEmailField.keyup(function () {
    validFieldCheck(companyEmailField, emailRegex);
});

referralCompanyEmailField.keyup(function () {
    validFieldCheck(referralCompanyEmailField, emailRegex);
});

zipCodeField.keyup(function () {
    validFieldCheck(zipCodeField, zipCodeRegex);
});

submitButton.on("click", function () {
    checkTextField(firstNameField);
    checkTextField(lastNameField);
    checkTextField(companyNameField);
    checkTextField(phoneNumberField);
    checkTextField(referralFirstNameField);
    checkTextField(referralLastNameField);
    checkTextField(referralSAPField);
    checkTextField(referralCompanyEmailField);
    checkDropdownField(stateField);
    checkDropdownField(fleetSizeField);
    
    if(!$(".error-message").length) {
    referralSubmit();
    referralForm.detach();
    referralFormWrapper.append(
        "<div class='thank-you-wrapper'><h1>✔</h1><br><h2 class='thank-you-title'>You submitted a new refferral</h2><br><p class='thank-you-sub'>Your submission has been received<br>We will be in touch and contact you soon!<br>You can close this screen now.</p><a class='thank-you-link' href='https://www.torquebyryder.com/'>Go to Torque website</a></div>"
    );
    console.log(
        "%cLead Created Successfully",
        "color:#afff94;font-size:12px;"
      );
    }
});

requiredTextFields.each(function () {
    $(this).keyup(function () {
        if (
            $(this).val().length > 0 &&
            $(`#error-${$(this).attr("id")}`).length
        ) {
            $(`#error-${$(this).attr("id")}`).detach();
        }
    });
});

requiredDropdownFields.each(function () {
    $(this).change(function () {
        if ($(`#error-${$(this).attr("id")}`).length) {
            $(`#error-${$(this).attr("id")}`).detach();
        }
    });
});

//------------------------------- SUBMIT FUNCTION ---------------------------------

/**
 //TODO        make referral submission fuction
 */

const pageUTMs = window.location.search;

function referralSubmit() {
    const serialize = $("form").serialize();
    const UTM_URL = serialize.concat(`&${pageUTMs.replace("?", "")}`);
    const finalQuery = UTM_URL.concat(
        "&Campaign_ID__c=7018B000000Hw6iQAC&GCLID__c=testing_gclid"
    );
    const URL =
        "https://test.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&debug=1&debugEmail=mobilemaintenance@doublenines.co&oid=00D8B0000008hPZ&";
    const finalURL = URL.concat(finalQuery);

    fetch(finalURL, {
        method: "POST",
    });
}

/**
 * required fields are
 * first name, last name
 * company name
 * phone number
 * fleet size
 * state
 * and all referral infos
 */

function checkTextField(field) {
    if (field.val().length == 0 && !$(`#error-${field.attr("id")}`).length) {
        field.after(
            `<p id='error-${field.attr("id")}' class='error-message' style='color: red;'>
            Please enter a valid value.
            </p>`
        );
    }
}

function checkDropdownField(field) {
    if (field.val() == null && !$(`#error-${field.attr("id")}`).length) {
        field.after(
            `<p id='error-${field.attr("id")}' class='error-message' style='color: red;'>
            Please enter a valid value.
            </p>`
        );
    }
}
