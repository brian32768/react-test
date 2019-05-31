import React, {Component} from "react"
import PropTypes from 'prop-types'
import ReactDOM from "react-dom"

class TryMe extends Component {
    static propTypes = {
        text: PropTypes.string.isRequired
    };

    render() {
        return (
            <>
            <h3>{this.props.text}</h3>
            {this.props.children}
            </>
        )
    }
}

class About extends Component {
    static propTypes = {
        text: PropTypes.string.isRequired
    };

    render() {
        console.log("It's about props.", this.props.match.params);
        return (
            <div id="about">
            <h2>About react-test</h2>
            <TryMe text={this.props.text}>This is my 14 day free trial</TryMe>
            </div>
        );
    }
}

export default About;
