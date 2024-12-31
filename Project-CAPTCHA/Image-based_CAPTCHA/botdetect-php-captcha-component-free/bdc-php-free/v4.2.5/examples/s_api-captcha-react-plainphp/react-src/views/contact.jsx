import React from 'react';
import axios from 'axios';
import { Captcha, captchaSettings } from 'reactjs-captcha';

class Contact extends React.Component {

    constructor(props) {
        super(props);

        // set the captchaEndpoint property to point to 
        // the captcha endpoint path on your app's backend
        captchaSettings.set({
            captchaEndpoint: 'botdetect-captcha-lib/simple-botdetect.php'
        });
    }

    componentDidMount() {
        let self = this;

        // the validation-error messages for the form's data-input fields
        const errorMessages = {
            name: 'Name must be at least 3 chars long!',
            email: 'Email is invalid!',
            subject: 'Subject must be at least 10 chars long!',
            message: 'Message must be at least 10 chars long!'
        };

        // the global variables that hold the validation-status flags of the form's data-input fields;
        // those validation-status flags will be checked on form submit
        this.isNameValid = false;
        this.isEmailValid = false;
        this.isSubjectValid = false;
        this.isMessageValid = false;


        function validateName() {
            var name = document.getElementById('name').value;
            self.isNameValid = (name.length >= 3);
            if (self.isNameValid) {
                document.getElementsByClassName('name')[0].innerHTML = '';
            } else {
                document.getElementsByClassName('name')[0].innerHTML = errorMessages.name;
            }
        }

        function validateEmail() {
            var email = document.getElementById('email').value;
            var emailRegEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            self.isEmailValid = emailRegEx.test(email);
            if (self.isEmailValid) {
                document.getElementsByClassName('email')[0].innerHTML = '';
            } else {
                document.getElementsByClassName('email')[0].innerHTML = errorMessages.email;
            }
        }

        function validateSubject() {
            var subject = document.getElementById('subject').value;
            self.isSubjectValid = (subject.length >= 10);
            if (self.isSubjectValid) {
                document.getElementsByClassName('subject')[0].innerHTML = '';
            } else {
                document.getElementsByClassName('subject')[0].innerHTML = errorMessages.subject;
            }
        }

        function validateMessage() {
            var message = document.getElementById('message').value;
            self.isMessageValid = (message.length >= 10);
            if (self.isMessageValid) {
                document.getElementsByClassName('message')[0].innerHTML = '';
            } else {
                document.getElementsByClassName('message')[0].innerHTML = errorMessages.message;
            }
        }

        // validate the form's data-input fields on blur event
        document.getElementById('name').addEventListener('blur', validateName);
        document.getElementById('email').addEventListener('blur', validateEmail);
        document.getElementById('subject').addEventListener('blur', validateSubject);
        document.getElementById('message').addEventListener('blur', validateMessage);
    }

    // process the contact form on submit event
    onFormSubmitHandler(event) {
        let self = this;
        let formMessage = document.getElementById('form-messages');

        if (self.isNameValid && self.isEmailValid && self.isSubjectValid && self.isMessageValid) {
            
            // get the user-entered captcha code value to be validated at the backend side        
            let userEnteredCaptchaCode = this.captcha.getUserEnteredCaptchaCode();
          
            // get the id of a captcha instance that the user tried to solve
            let captchaId = this.captcha.getCaptchaId();

            var postData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value,
                // add the user-entered captcha code value to the post data        
                userEnteredCaptchaCode: userEnteredCaptchaCode,
                // add the id of a captcha instance to the post data            
                captchaId: captchaId
            };

            // post both the form-data and captcha data to the backend
            axios.post('form/contact.php', postData)
                .then(response => {
                    if (response.data.success == false) {
                        // captcha validation failed; show the error message
                        formMessage.setAttribute('class', 'alert alert-error');
                        formMessage.innerHTML = response.data.errors.userEnteredCaptchaCode;
                        // call the self.captcha.reloadImage()
                        // in order to generate a new captcha challenge
                        self.captcha.reloadImage();
                    } else {
                        // captcha validation succeeded; proceed with the workflow
                        self.props.history.push('/contact-success-notify');
                    }
                }).catch(error => {
                    throw new Error(error);
                });
        } else {
            formMessage.setAttribute('class', 'alert alert-error');
            formMessage.innerHTML = 'Please enter valid values.';
        }

        event.preventDefault();
    }

    render() {
        var self = this;
        return (
            <div id="main-content">
                <form id="contactForm" method="POST" onSubmit={self.onFormSubmitHandler.bind(self)}>
                    <div id="form-messages"></div>

                    <label>
                        <span>Name:</span>
                        <input type="text" id="name"/>
                    </label>
                    <div className="error name"></div>


                    <label>
                        <span>Email</span>
                        <input type="email" id="email"/>
                    </label>
                    <div className="error email"></div>


                    <label>
                        <span>Subject:</span>
                        <input type="text" id="subject"/>
                    </label>
                    <div className="error subject"></div>


                    <label>
                        <span>Message:</span>
                        <textarea id="message"></textarea>
                    </label>
                    <div className="error message"></div>

                    {/* captcha challenge: placeholder */}
                    <Captcha captchaStyleName="reactFormCaptcha" ref={(captcha) => {this.captcha = captcha;}} />

                    <label>
                        <span>Retype the chars long from the picture:</span>
                        {/* captcha code: user-input textbox */}
                        <input 
                            type="text" 
                            id="userCaptchaInput"
                        />
                    </label>

                    <button type="submit" id="submitButton">Send</button>
                </form>
            </div>
        )
    }
}

export default Contact;
