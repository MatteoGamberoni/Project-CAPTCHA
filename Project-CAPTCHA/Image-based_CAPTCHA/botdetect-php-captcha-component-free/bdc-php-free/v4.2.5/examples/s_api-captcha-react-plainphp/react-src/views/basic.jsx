import React from 'react';
import axios from 'axios';
import { Captcha, captchaSettings } from 'reactjs-captcha';

class Basic extends React.Component {

    constructor(props) {
        super(props);

        // set the captchaEndpoint property to point to 
        // the captcha endpoint path on your app's backend
        captchaSettings.set({
            captchaEndpoint: 'botdetect-captcha-lib/simple-botdetect.php'
        });
    }

    // process the form on submit event
    onFormSubmitHandler(event) {

        // get the user-entered captcha code value to be validated at the backend side        
        let userEnteredCaptchaCode = this.captcha.getUserEnteredCaptchaCode();
      
        // get the id of a captcha instance that the user tried to solve
        let captchaId = this.captcha.getCaptchaId();

        let postData = {
            // add the user-entered captcha code value to the post data        
            userEnteredCaptchaCode: userEnteredCaptchaCode,
            // add the id of a captcha instance to the post data            
            captchaId: captchaId
        };

        let self = this;
        let formMessage = document.getElementById('form-messages');

        // post the captcha data to the backend
        axios.post('form/basic.php', postData)
                .then(response => {
                    if (response.data.success == false) {
                        // captcha validation failed; show the error message
                        formMessage.setAttribute('class', 'alert alert-error');
                        formMessage.innerHTML = 'CAPTCHA validation failed.';
                        // call the self.captcha.reloadImage()
                        // in order to generate a new captcha challenge
                        self.captcha.reloadImage();
                    } else {
                        // captcha validation succeeded; proceed with the workflow
                        self.props.history.push('/basic-success-notify');
                    }
                }).catch(function (error) {
                    throw new Error(error);
                });

        event.preventDefault();
    }

    render() {
        return (
            <section id="main-content">
                <form id="basicForm" method="POST" onSubmit={this.onFormSubmitHandler.bind(this)}>
                    <div id="form-messages"></div>

                    {/* captcha challenge: placeholder */}
                    <Captcha captchaStyleName="reactBasicCaptcha" ref={(captcha) => {this.captcha = captcha}} />

                    <label>
                        <span>Retype the characters from the picture:</span>
                        {/* captcha code: user-input textbox */}
                        <input 
                            type="text" 
                            id="userCaptchaInput"
                        />
                    </label>

                    <button type="submit" id="submitButton">Validate</button>
                </form>
            </section>
        )
    }
}

export default Basic;
