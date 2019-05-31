import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { ContactForm } from './controlled-form'

class Contact extends React.Component {
     static propTypes = {
        title: PropTypes.string
    }

    render() {
        return (
            <div id="contact">
                <h2>Contact us using this form.</h2>
                <ContactForm />
            </div>
        );
    }
}

export default Contact;
