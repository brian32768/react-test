import React from "react"  // eslint-disable-line no-unused-vars

const TryMe = (props) => {  // eslint-disable-line no-unused-vars
    return (
        <>
            <h3>{props.text}</h3>
            {props.children}
        </>
    )
}

const About = (props) => {
    console.log("It's about props.", props);
    return (
        <div id="about">
            <h2>About react-test</h2>
            <TryMe text={props.text}>This is my 14 day free trial</TryMe>
        </div>
    );
}
export default About;
