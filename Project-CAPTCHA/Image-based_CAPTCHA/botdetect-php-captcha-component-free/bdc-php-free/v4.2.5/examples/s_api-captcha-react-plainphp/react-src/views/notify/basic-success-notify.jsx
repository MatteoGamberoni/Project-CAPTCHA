import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';

class BasicSuccessNotify extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section id="main-content">
                <p className="alert alert-success">Captcha validation succeeded at the backend side.</p>

                <p>
                    <NavLink className="back" to="/basic-form">&larr; Back to Basic form example.</NavLink>
                </p>
            </section>
        )
    }
}

export default BasicSuccessNotify;
