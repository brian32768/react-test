import React, {useState, useEffect, useRef} from 'react'  // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types'
import {incCounter} from '../actions'
import {connect} from 'react-redux'

const Counter = ({count, incCounter}) => {

    useEffect(() => {
        // I have to keep the state variable in redux for the counter
        // to work over page reloads.
        incCounter();
    }, []);

    return (
        <div className="counter">Page visits: {count}</div>
    );
}
Counter.propTypes = {
    count: PropTypes.number,
    updateCounter: PropTypes.func
}
const mapStateToProps = (state) => ({
    count: state.counter
});
const mapDispatchToProps = {
    incCounter
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
