$(function () {

    // create the frontend captcha instance in the DOM.ready event-handler;
    // and set the captchaEndpoint property to point to 
    // the captcha endpoint path on your app's backend
    var captcha = $('#botdetect-captcha').captcha({
        captchaEndpoint: 'botdetect-captcha-lib/simple-botdetect.php'
    });

    // the validation-error messages for the form's data-input fields
    var errorMessages = {
        name: 'Name must be at least 3 chars long!',
        email: 'Email is invalid!',
        subject: 'Subject must be at least 10 chars long!',
        message: 'Message must be at least 10 chars long!'
    };

    // the global variables that hold the validation-status flags of the form's data-input fields;
    // those validation-status flags will be checked on form submit
    var isNameValid = false,
        isEmailValid = false,
        isSubjectValid = false,
        isMessageValid = false;

    function validateName() {
        var name = $('#name').val();
        isNameValid = (name.length >= 3);
        if (isNameValid) {
            $('.name').text('');
        } else {
            $('.name').text(errorMessages.name);
        }
    }

    function validateEmail() {
        var email = $('#email').val();
        var emailRegEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        isEmailValid = emailRegEx.test(email);
        if (isEmailValid) {
            $('.email').text('');
        } else {
            $('.email').text(errorMessages.email);
        }
    }

    function validateSubject() {
        var subject = $('#subject').val();
        isSubjectValid = (subject.length >= 10);
        if (isSubjectValid) {
            $('.subject').text('');
        } else {
            $('.subject').text(errorMessages.subject);
        }
    }

    function validateMessage() {
        var message = $('#message').val();
        isMessageValid = (message.length >= 10);
        if (isMessageValid) {
            $('.message').text('');
        } else {
            $('.message').text(errorMessages.message);
        }
    }

    // validate the form's data-input fields on blur event
    $('#name').blur(validateName);
    $('#email').blur(validateEmail);
    $('#subject').blur(validateSubject);
    $('#message').blur(validateMessage);


    // process the contact form on submit event
    $('#contactForm').submit(function (event) {

        if (isNameValid && isEmailValid && isSubjectValid && isMessageValid) {
            
            // get the user-entered captcha code value to be validated at the backend side
            var userEnteredCaptchaCode = captcha.getUserEnteredCaptchaCode();

            // get the id of a captcha instance that the user tried to solve
            var captchaId = captcha.getCaptchaId();

            var postData = {
                name: $('#name').val(),
                email: $('#email').val(),
                subject: $('#subject').val(),
                message: $('#message').val(),
                // add the user-entered captcha code value to the post data
                userEnteredCaptchaCode: userEnteredCaptchaCode,
                // add the id of a captcha instance to the post data
                captchaId: captchaId
            };

            // post both the form-data and captcha data to the backend
            $.ajax({
                method: 'POST',
                url: 'form/contact.php',
                dataType: 'json',
                contentType: 'application/json',
                data: JSON.stringify(postData),
                success: function (response) {
                    if (response.success == false) {
                        // captcha validation failed; show the error message
                        $('#form-messages')
                            .removeClass()
                            .addClass('alert alert-error')
                            .text(response.errors.userEnteredCaptchaCode);
                        // call the captcha.reloadImage()
                        // in order to generate a new captcha challenge
                        captcha.reloadImage();
                    } else {
                        // captcha validation succeeded; proceed with the workflow
                        window.location.replace('notify_page/contact_success_notify.html');
                    }
                },
                error: function (error) {
                    throw new Error(error);
                }
            });

        } else {
            $('#form-messages')
                .removeClass()
                .addClass('alert alert-error')
                .text('Please enter valid values.');
        }

        event.preventDefault();
    });

});
