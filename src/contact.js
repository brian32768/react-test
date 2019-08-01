import React from 'react'
import ContactForm from './controlled-form'

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
