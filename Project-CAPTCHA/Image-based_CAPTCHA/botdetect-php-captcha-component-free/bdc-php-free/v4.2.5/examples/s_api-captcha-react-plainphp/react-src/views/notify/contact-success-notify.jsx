import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';

class ContactSuccessNotify extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section id="main-content">
                <p class="alert alert-success">Thank you! Your message was sent successfully.</p>

                <p>
                    <NavLink className="back" to="/contact-form">&larr; Back to Contact form example.</NavLink>
                </p>
            </section>
        )
    }
}

export default ContactSuccessNotify;
