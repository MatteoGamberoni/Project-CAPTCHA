var app = angular.module('app', ['BotDetectCaptcha', 'ngRoute']);

app.config(function ($routeProvider, captchaSettingsProvider) {
    $routeProvider
        .when('/basic', { templateUrl: 'templates/basic/basic-captcha.html' })
        .when('/contact', { templateUrl: 'templates/contact/contact-captcha.html' })
        .when('/basic-success-notify', { templateUrl: 'templates/notify/basic-success-notify.html' })
        .when('/contact-success-notify', { templateUrl: 'templates/notify/contact-success-notify.html' })
        .otherwise({ redirectTo: '/basic' });

    captchaSettingsProvider.setSettings({
        // set the captchaEndpoint property to point to 
        // the captcha endpoint path on your app's backend
        captchaEndpoint: 'botdetect-captcha-lib/simple-botdetect.php'
    });
});

app.controller('BasicController', function ($scope, $http, $window, Captcha) {

    // validation messages
    $scope.errorMessages = '';

    // process the form on submit event
    $scope.validate = function () {

        // create new AngularJS Captcha instance
        var captcha = new Captcha();

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
        $http({
            method: 'POST',
            url: 'form/basic.php',
            data: postData
        })
            .then(function (response) {
                if (response.data.success == false) {
                    // captcha validation failed; show the error message
                    $scope.errorMessages = 'CAPTCHA validation failed.';
                    // call the captcha.reloadImage()
                    // in order to generate a new captcha challenge
                    captcha.reloadImage();
                } else {
                    // captcha validation succeeded; proceed with the workflow
                    $window.location.href = '#/basic-success-notify';
                }
            }, function (error) {
                console.log(error.data);
            });
    };

});

app.controller('ContactController', function ($scope, $http, $window, Captcha) {

    // validation messages
    $scope.errorMessages = '';

    // process the contact form on submit event
    $scope.send = function (contactFormValid) {

        // create new AngularJS Captcha instance
        var captcha = new Captcha();

        if (contactFormValid) {

            // get the user-entered captcha code value to be validated at the backend side        
            var userEnteredCaptchaCode = captcha.getUserEnteredCaptchaCode();

            // get the id of a captcha instance that the user tried to solve
            var captchaId = captcha.getCaptchaId();

            var postData = {
                name: $scope.name,
                email: $scope.email,
                subject: $scope.subject,
                message: $scope.message,
                // add the user-entered captcha code value to the post data            
                userEnteredCaptchaCode: userEnteredCaptchaCode,
                // add the id of a captcha instance to the post data            
                captchaId: captchaId
            };

            // post both the form-data and captcha data to the backend
            $http({
                method: 'POST',
                url: 'form/contact.php',
                data: postData
            })
                .then(function (response) {
                    if (response.data.success == false) {
                        // captcha validation failed; show the error message
                        $scope.errorMessages = response.data.errors;
                        // call the captcha.reloadImage()
                        // in order to generate a new captcha challenge
                        captcha.reloadImage();
                    } else {
                        // captcha validation succeeded; proceed with the workflow
                        $window.location.href = '#/contact-success-notify';
                    }
                }, function (error) {
                    console.log(error.data);
                });
        } else {
            $scope.errorMessages = { formInvalid: 'Please enter valid values.' };
        }
    };

});

app.controller('NavigationController', function ($scope, $location) {
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
});
