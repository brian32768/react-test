import React, {Component} from "react";
import PropTypes from 'prop-types';
import ReactDOM from "react-dom";

class TryMe extends Component {
    render() {
        return (
            <div>
            <h3>{this.props.title}</h3>
            {this.props.children}
            </div>
        )
    }
}

class About extends Component {
    render() {
        return (
            <div id="about">
            <h2>About react-test</h2>
            <TryMe title={this.props.title}>This is my 14 day free trial</TryMe>
            </div>
        );
    }
}

About.propTypes = {
    title: PropTypes.string.isRequired
}

export default About;
