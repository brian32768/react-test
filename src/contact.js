import React, {Component} from "react";
import PropTypes from 'prop-types';
import ReactDOM from "react-dom";

class Contact extends Component {
     static propTypes = {
        title: PropTypes.string
    }

    render() {
        return (
            <div id="contact">
            <h2>Contact us using this form.</h2>
            </div>
        );
    }
}

export default Contact;
