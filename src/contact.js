import React from 'react'  // eslint-disable-line no-unused-vars
import ContactForm from './controlled-form'  // eslint-disable-line no-unused-vars

const Contact = () => {
    const handleSubmit = (e) => {
        console.log(e);
    }
    return (
        <>
            <h2>Contact us using this form.</h2>
            <ContactForm onSubmit={handleSubmit}/>
        </>
    );
}

export default Contact;
