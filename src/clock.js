import React, {Component} from "react";
import PropTypes from 'prop-types';
import ReactDOM from "react-dom";

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: "MM/DD/YYYY, 00:00:00"
        }
        this.intervalHandler = this.intervalHandler.bind(this);
        setInterval(this.intervalHandler, 1000);
    }

    intervalHandler() {
        let d = new Date();
        this.setState({
            time: d.toLocaleString()
        });
    }

    render() {
        return (
            <div id="clock">
            {this.state.time}
            </div>
        );
    }
}

export default Clock;
