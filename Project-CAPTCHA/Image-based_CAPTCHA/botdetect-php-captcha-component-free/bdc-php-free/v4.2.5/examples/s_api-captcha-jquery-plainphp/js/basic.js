$(function () {

    // create the frontend captcha instance in the DOM.ready event-handler;
    // and set the captchaEndpoint property to point to 
    // the captcha endpoint path on your app's backend
    var captcha = $('#botdetect-captcha').captcha({
        captchaEndpoint: 'botdetect-captcha-lib/simple-botdetect.php'
    });


    // process the form on submit event
    $('#basicForm').submit(function (event) {

        // get the user-entered captcha code value to be validated at the backend side        
        var userEnteredCaptchaCode = captcha.getUserEnteredCaptchaCode();

        // get the id of a captcha instance that the user tried to solve
        var captchaId = captcha.getCaptchaId();

        var postData = {
            // add the user-entered captcha code value to the post data
            userEnteredCaptchaCode: userEnteredCaptchaCode,
            // add the id of a captcha instance to the post data
            captchaId: captchaId
        };

        // post the captcha data to the backend
        $.ajax({
            method: 'POST',
            url: 'form/basic.php',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(postData),
            success: function (response) {
                if (response.success == false) {
                    // captcha validation failed; show the error message
                    $('#form-messages')
                        .removeClass()
                        .addClass('alert alert-error')
                        .text('CAPTCHA validation failed.');
                    // call the captcha.reloadImage()
                    // in order to generate a new captcha challenge
                    captcha.reloadImage();
                } else {
                    // captcha validation succeeded; proceed with the workflow
                    window.location.replace('notify_page/basic_success_notify.html');
                }
            },
            error: function (error) {
                throw new Error(error);
            }
        });

        event.preventDefault();
    });

});
