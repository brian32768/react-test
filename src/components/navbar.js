import React, {useState} from 'react'  // eslint-disable-line no-unused-vars
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome' // eslint-disable-line no-unused-vars
import {faHome, faInfoCircle, faGlobe, faCoffee} from '@fortawesome/free-solid-svg-icons' // eslint-disable-line no-unused-vars
import {NavLink} from 'redux-first-router-link' // eslint-disable-line no-unused-vars

/* Font gallery: https://fontawesome.com/icons?d=gallery&s=solid */

const Navbar = () => {
    return (
        <>
            <NavLink to="/"><FontAwesomeIcon icon={faHome}/>Home</NavLink>
            <NavLink to="/about"><FontAwesomeIcon icon={faInfoCircle}/>About</NavLink>
            <NavLink to={"/map"}><FontAwesomeIcon icon={faGlobe}/>Map</NavLink>
            <NavLink to="/contact"><FontAwesomeIcon icon={faCoffee}/>Contact</NavLink>
        </>
    );
}
export default Navbar
