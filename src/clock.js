import React, {useState, useEffect, useRef} from 'react'  // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

// This happens to be a good place to experiment with useRef and useState.

const Clock = () => {
    const [time, setTime] = useState("The Time Goes Here");

    // I want a value that lives in this component forever,
    // that gets initialized on the first visit and then stays
    // set to that value no matter how many times I leave the page
    // that the component is embedded in

    const flibberty = useRef('hi');
    const [jibberty, setJibberty] = useState(0);

    useEffect(() => {

        const id = setInterval(() => {
            const d = new Date(); // have to do this EVERY TIME or it won't update.
            setTime(d.toLocaleString());
        }, 1000);

        // This code runs once each time the component loads,
        // but not every time the component renders.
        // Because of the setInterval call, it renders once per second.

        const d = new Date();
        flibberty.current = Math.round(d.getTime() / 1000).toString();

        // I want to count how many times this page has loaded,
        // but this does not work because useState sets jibberty to 0
        // each time the component loads...
        setJibberty(jibberty + 1)

        // I have to keep the state variable in redux for the counter
        // to work over page reloads.
        setJabberwock(jabberwock + 1)

        return () => {
            // This runs when the component unloads, we have to do this or
            // else the timer will try to write to the unmounted component.
            clearInterval(id);
        }
    }, []);

    return (
        <div className="clock">{time} {flibberty.current} {jibberty}</div>
    );
}
Clock.propTypes = {
    jabberwock: PropTypes.number,
    setJabberwock: PropTypes.func
}
const mapStateToProps = {
    jabberwock
}
const mapDispatchToProps = {
    setJabberwock
}
export default connect(mapStateToProps, mapDispatchToProps)(Clock);
