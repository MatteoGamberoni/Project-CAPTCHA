import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import Basic from './views/basic.jsx';
import Contact from './views/contact.jsx';
import BasicSuccessNotify from './views/notify/basic-success-notify.jsx';
import ContactSuccessNotify from './views/notify/contact-success-notify.jsx';
import './App.css';

class PageLayout extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <div className="header-content"><h1>BotDetect React CAPTCHA Examples</h1></div>
                </header>

                <ul className="nav">
                    <li><NavLink to="/basic-form">Basic Example</NavLink></li>
                    <li><NavLink to="/contact-form">Contact Example</NavLink></li>
                </ul>

                <Route exact path="/" component={Basic}/>
                <Route path="/basic-form" component={Basic}/>
                <Route path="/contact-form" component={Contact}/>

                <Route path="/basic-success-notify" component={BasicSuccessNotify}/>
                <Route path="/contact-success-notify" component={ContactSuccessNotify}/>

            </div>
        )
    }
}

export default PageLayout;
