// App.js react-test
//
import React from 'react'  // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Navbar from './components/navbar' // eslint-disable-line no-unused-vars
import '../App.scss'

import * as components from './components'

const App = ({page}) => {
    const Component = components[page]; // eslint-disable-line no-unused-vars
    return (
        <div>
            <header>
            <h2>react-test</h2>
            <Navbar/>
            </header>
            <main>
            <Component/>
            </main>
        </div>
    )
}
App.propTypes = {
    page: PropTypes.string,
}
const mapStateToProps = (state) => ({
    page: state.page,
});
export default connect(mapStateToProps)(App);
