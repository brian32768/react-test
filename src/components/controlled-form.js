import React, {useState, useEffect} from 'react'  // eslint-disable-line no-unused-vars

const ContactForm = (props) => {
    const [value, setValue] = useState('');
    return (
        <>
            We are most happy to serve you.
            <form onSubmit={props.onSubmit}>
                <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
                <input type="submit" />
            </form>
        </>
    );
}
export default ContactForm;
