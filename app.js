(function() {



    const nameRegex = /[\sa-z]+/i;
    const emailRegex = /\w*/i;

    document.getElementById('submit-button').onclick = submitForm;

    function handleErrors(error) {
        console.error(error);
        alert('An unexpected error has ocurred');
    }

    function validateFieldWithRegexp(fieldId, regexp) {
        return regexp.test(document.getElementById(fieldId).value)
    }

    function validateForm(inputs) {
        return inputs.reduce((test, input) => test && validateFieldWithRegexp(input.id, input.pattern), true);
    }

    function submitForm($event) {

        try {

            const inputs = [
                { id: 'studentNumberField', pattern: nameRegex },
                { id: 'firstNameField', pattern: nameRegex },
                { id: 'lastNameField', pattern: nameRegex },
                { id: 'emailField', pattern: emailRegex }
            ];

            validateForm(inputs) ? alert('Form Correctly Submitted') : alert('Incorrect Form');
        } catch (e) {
            handleErrors(e);
        }
    }


})()