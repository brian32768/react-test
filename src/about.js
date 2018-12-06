import React, {Component} from "react";
import PropTypes from 'prop-types';
import ReactDOM from "react-dom";

class TextThing extends Component {
    render() {
        return (
            <h3>test</h3>
        );
    }
}

class TryMe extends TextThing {
    constructor() {
        super();
        this.title = 'text';
    }
}

class About extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        console.log("properties", this.props)
        return (
            <div id="about">
            <h2>About react-test</h2>
            Testing React.

            <TryMe title="test">This is my 14 day free trial</TryMe>
            </div>
        );
    }
}

About.propTypes = {
//    title: PropTypes.string.isRequired
}

export default About;
