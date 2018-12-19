import React, {Component} from "react"
import PropTypes from 'prop-types'
import ReactDOM from "react-dom"
import {ChronoContext} from './chrono-context'

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: "MM/DD/YYYY, 00:00:00"
        }
        this.intervalHandler = this.intervalHandler.bind(this);
        setInterval(this.intervalHandler, 1000);
    }

    // We use a callback function here so that this child object
    // can pass a new time up to the parents or siblings at the
    // specified one second interval

    // The use of a context here is just for demonstration.
    // I could also pass the handle for the parent's handler
    // in as a prop.

    intervalHandler() {
        let d = new Date();
        let localeString = d.toLocaleString();
        this.setState({time: localeString});
        this.context.onTick(localeString);
    }

    render() {
        return (
            <div id="clock"></div>
        );
    }
}
Clock.contextType = ChronoContext;

Clock.propTypes = {
    setTime: PropTypes.func
}

export default Clock;
